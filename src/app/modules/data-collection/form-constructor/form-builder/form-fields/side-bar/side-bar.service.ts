import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { v4 as uuid } from "uuid";
import { cloneDeep, isEmpty } from "lodash";
import { Form } from "src/app/models/data-collection/form.model";
import { Field } from "src/app/models/data-collection/field.model";

@Injectable({
  providedIn: "root"
})
export class SideBarService {
  sectionSubject = new BehaviorSubject({});
  events$ = new Subject();

  constructor() {}

  //FiXME:This is a very bad code that was written very quickly. I hope the followers will fix it
  onChangeGroupBeing(
    field: Field,
    section: Field,
    form?: Form,
    group?: Field,
    rootGroup?: Field
  ) {
    if (section._id == form._id)
      this.pureAddAllFieldsToList(field, section.fields);
    let sectionNew = cloneDeep(section);
    let newField = cloneDeep(field);
    newField.fields = [];
    let newGroup;
    let newRootGroup;
    if (group) {
      newGroup = cloneDeep(group);
      newGroup.fields = [];
    }
    if (rootGroup) {
      newRootGroup = cloneDeep(rootGroup);
      newRootGroup.fields = [];
    }
    let sectionFind = form.fields.filter(f => f.name == section.name);
    if (field.fields) {
      field.fields.forEach(f => this.addExistingField(f, newField.fields));
    }

    if (isEmpty(sectionFind)) {
      sectionNew.fields = [];
      if (rootGroup && group) {
        newRootGroup.field = [];
        newGroup.fields = [];
        this.addExistingField(newField, newGroup.fields);
        this.addExistingField(newGroup, newRootGroup.fields);
        this.addExistingField(newRootGroup, sectionNew.fields);
        this.addExistingField(sectionNew, form.fields);
        section.exist = group.exist = rootGroup.exist = true;
      } else if (group && !rootGroup) {
        newGroup.fields = [];
        this.addExistingField(newField, newGroup.fields);
        this.addExistingField(newGroup, sectionNew.fields);
        this.addExistingField(sectionNew, form.fields);
        section.exist = group.exist = true;
      } else {
        this.addExistingField(newField, sectionNew.fields);
        this.addExistingField(sectionNew, form.fields);
        section.exist = true;
      }
    } else {
      if (!rootGroup && !group) {
        form.fields.forEach(f => {
          if (f.name == sectionNew.name) {
            if (rootGroup && group) {
              f.fields.forEach(f1 => {
                if (f1.name == rootGroup.name) {
                  f1.fields.forEach(f2 => {
                    if (f2.name == group.name)
                      this.addExistingField(newField, f2.fields);
                  });
                }
              });
            } else if (!rootGroup && group) {
              f.fields.forEach(f1 => {
                if (f1.name == group.name) {
                  this.addExistingField(newField, f1.fields);
                }
              });
            } else {
              this.addExistingField(newField, f.fields);
            }
          }
        });
      } else if (!rootGroup && group) {
        let groupFind = sectionFind[0].fields.filter(f => f.name == group.name);
        if (isEmpty(groupFind)) {
          newGroup.fields = [];
          this.addExistingField(newField, newGroup.fields);
          form.fields.forEach(f => {
            if (f.name == sectionNew.name) {
              this.addExistingField(newGroup, f.fields);
              group.exist = true;
            }
          });
        } else {
          form.fields.forEach(f => {
            if (f.name == sectionNew.name) {
              f.fields.forEach(f1 => {
                if (f1.name == group.name) {
                  this.addExistingField(newField, f1.fields);
                }
              });
            }
          });
        }
      } else {
        let groupRootFind = sectionFind[0].fields.filter(
          f => f.name == rootGroup.name
        );
        if (isEmpty(groupRootFind)) {
          newRootGroup.field = newGroup.fields = [];
          this.addExistingField(newField, newGroup.fields);
          this.addExistingField(newGroup, newRootGroup.fields);
          form.fields.forEach(f => {
            if (f.name == sectionNew.name) {
              this.addExistingField(newRootGroup, f.fields);
              group.exist = section.exist = rootGroup.exist = true;
            }
          });
        } else {
          let groupFind = groupRootFind[0].fields.filter(
            f => f.name == group.name
          );
          if (isEmpty(groupFind)) {
            newGroup.fields = [];
            this.addExistingField(newField, newGroup.fields);
            form.fields.forEach(f => {
              if (f.name == sectionNew.name) {
                f.fields.forEach(f1 => {
                  if (f1.name == rootGroup.name)
                    this.addExistingField(newGroup, f1.fields);
                  group.exist = true;
                });
              }
            });
          } else {
            form.fields.forEach(f => {
              if (f.name == sectionNew.name) {
                f.fields.forEach(f1 => {
                  if (f1.name == rootGroup.name) {
                    f1.fields.forEach(f2 => {
                      if (f2.name == group.name)
                        this.addExistingField(newField, f2.fields);
                    });
                  }
                });
              }
            });
          }
        }
      }
    }
  }

  pureAddAllFieldsToList(field: Field, list: Field[]): Field[] {
    let newField: Field = cloneDeep(field);
    newField.fields = [];
    newField._id = uuid();
    if (newField.type == 113 || newField.type == 114) {
      field.fields.forEach(f => {
        this.pureAddAllFieldsToList(f, newField.fields);
      });
    }
    this.addExistingField(newField, list);

    return list;
  }

  addExistingField(field: Field, fields: Field[]) {
    let newField = cloneDeep(field);
    newField._id = uuid();
    newField.isValid = true;
    newField.isValidName = true;
    fields.push(newField);
  }

  replaceExistinField(field: Field, fields: Field[]) {
    let newField = cloneDeep(field);
    newField._id = uuid();

    newField.isValid = true;
    newField.isValidName = true;

    return fields.map(item =>
      item.name == field.name && item.prefix == field.prefix ? newField : item
    );
  }

  changeExistingAllSection(event, fieldList: Field[]) {
    fieldList.forEach(field => {
      if (field.type == 113) this.changeExistingAllSection(event, field.fields);
      field.exist = event;
    });
  }

  onSectionDelete(field: Field, filedList?: Field | Form) {
    this.events$.next({ action: 'remove', target: field });
    // filedList.fields = filedList.fields.filter(sec => sec.name != field.name);
  }

  onFieldDelete(field: Field, filedList: Field[]) {
    filedList.forEach(f => {
      if (f.type == 113 || f.type == 114) this.onFieldDelete(field, f.fields);
      if (f.name == field.name && f.prefix == field.prefix)
        filedList.splice(filedList.indexOf(f), 1);
    });
  }

  findIfPresent(field: Field, filedList: Field[]) {
    let arr = [];
    filedList.filter(f => {
      if (f.type == 113 || f.type == 114) {
        let a = this.findIfPresent(field, f.fields);
        // console.log(a, 'a');
        a.forEach(t => arr.push(t));
      }
      if (f.name == field.name && f.prefix == field.prefix) {
        arr.push(field);
      }
    });
    // console.log(arr);
    return arr;
  }

  onFieldByIdDelete(field: Field, filedList: Field[]) {
    filedList.forEach(f => {
      if (f.type == 113 || f.type == 114) this.onFieldDelete(field, f.fields);
      if (f._id == field._id) filedList.splice(filedList.indexOf(f), 1);
    });
  }

  changeAllGroupAndNested(event: boolean, field: Field) {
    field.fields.forEach(f => {
      if (f.type == 113) this.changeAllGroupAndNested(event, f);
      f.exist = event;
    });
  }

  onFieldUncheck(field: Field, filedList: Field[]) {
    filedList.forEach(f => {
      if (f.type == 113 || f.type == 114) this.onFieldUncheck(field, f.fields);
      if (f.name == field.name && f.prefix == field.prefix) f.exist = false;
    });
  }

  fieldCheck(field: Field, filedList: Field) {
    // console.log(field,filedList);
    filedList.fields.forEach(f => {
      if (f.type == 113 || f.type == 114) this.fieldCheck(field, f);
      if (f.name == field.name && f.prefix == field.prefix) f.exist = true;
    });
  }

  onSectionUnckeck(field: Field, filedList: Field[]) {
    filedList.forEach(f => {
      if (f.type == 113) this.onFieldUncheck(field, f.fields);
    });
  }

  getIdOfSection(fieldList: Field[]) {
    if (!fieldList) return;
    return fieldList.map(groupSection => {
      if (groupSection.type == 113 || groupSection.type == 114) {
        this.getIdOfSection(groupSection.fields);
        // console.log(groupSection._id);
        return groupSection._id;
      }
    });
  }
}
