import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { v4 as uuid } from "uuid";
import { cloneDeep, isEmpty, flatMap, set, unset, get, has, setWith, isPlainObject, values } from "lodash";
import { Form } from "src/app/models/data-collection/form.model";
import { Field } from "src/app/models/data-collection/field.model";
import { FormBuilder, FormArray } from '@angular/forms';
import { unescapeIdentifier } from '@angular/compiler';
export const isSaved = (field: any) => {
  if (!field._id) return false;
  if (field.fields && field.fields.length > 0) {
    return !!field._id && field.fields.some(isSaved);
  } else {
    return !!field._id;
  }
}
export const getSaved = (fields: any[]) => {
  return fields.map((field) => {
    if (!isSaved(field)) return null;
    if (Array.isArray(field.fields)) {
      field.fields = getSaved(field.fields);
    }
    return field;
  }).filter(field => field !== null);
  // return fields;
}

const findById = (fields, id) => {
  fields.forEach(field => {
    if (field._id) {
      if (field._id === id) {
        return field;
      }
    }
    if (field.fields) {
      let found = findById(field.fields, id);
      return found;
      // if (found.length === 1) {
      //   return found[0];
      // }
    }
  });
}


@Injectable({
  providedIn: "root"
})
export class SideBarService {
  sectionSubject = new BehaviorSubject({});
  events$ = new Subject();
  _fields = new BehaviorSubject([]);
  _form = new BehaviorSubject(null);
  _pathIds = [];
  constructor(public fb: FormBuilder) {
    this.events$.subscribe((event: any) => {
      if (event.action === 'options') {
        let form = this._form.getValue();
        let formFields = form.fields.slice();
        const setOption = (fields, field, options) => {
          if (fields) {
            fields.forEach((ffield: any) => {
              if (ffield.pathId === field.pathId) {
                ffield.options = options;
              } else {
                setOption(ffield.fields, field, options);
              }
            });
          }
        }
        setOption(formFields, event.field, event.options);
        form.fields = formFields;
        this.form = Object.assign({}, form);
      }
    })
  }

  get form() {
    return this._form.getValue();
  }

  get form$() {
    return this._form.asObservable();
  }
  set form(_form) {

    if (isPlainObject(_form.fields)) {
      _form.fields = values(_form.fields);
    }
    _form.form = this.initForm(_form.fields);
    _form.workspace = [];
    _form.fields.forEach((field) => set(_form.workspace, field.path, field));
    console.log(`form updated`, _form);
    this._form.next(_form);
  }

  get fields() {
    return this._fields.getValue();
  }


  parentControlPath(paths) {
    if (paths.length > 1) {
      return flatMap(paths.slice(0, -1), (path => { return [path, 'fields'] }))
    }
  }

  fieldControlPath(paths) {
    if (paths.length > 1) {
      flatMap(paths, (path => { return [path, 'fields'] })).slice(0, -1)
    }
  }

  getParentControl(field) {
    let form = this.form.form;
    let parent = form.get(this.parentControlPath(field.path));
    return parent;
  }
  createParentsIfNotExist(parents) {
    let form = this.form.form;
    parents.reverse();
    for (let parent of parents) {
      let control = form.get(this.fieldControlPath(parent.path));
      if (!control) {
        console.log(parent)
        let parentControl = this.createForm(parent);
        if (parent.path > 1) {
          let prev = form.get(this.parentControlPath(parent.path));
          prev.addControl(parent.name, parentControl);
        } else {
          form.addControl(parent.name, parentControl);
        }
      }
    }
    let ancestor = parents[parents.length - 1];
    console.log(ancestor, form)
    return form.get(this.fieldControlPath(ancestor.path));
  }
  createWorkspace(field) {
    if (!has(this.form.workspace, this.parentControlPath(field.path))) {
      set(this.form.workspace, this.parentControlPath(field.path), field)
    }
    return get(this.form.workspace, this.parentControlPath(field.path));
  }
  addField(field, root?) {
    let form = this.form.form;// this.fb.array([]) as FormArray;
    if (field.path.length > 1) {
      let parent = get(this.form.workspace, this.parentControlPath(field.path), []);
      this.createWorkspace(root);
      set(this.form.workspace, this.parentControlPath(field.path), parent);
      let pc = this.getParentControl(field);
      if (!pc) {
        form.addControl(root.name, this.createForm(root));
      } else {
        pc.addControl(field.name, this.createForm(field));
      }
    } else {
      this.form.workspace.push(field);
      form.addControl(field.name, this.createForm(field));
    }
    this.events$.next({ action: 'update' });
    console.log(this.form);
    return form;
  }

  removeField(field) {
    let form = this.form.form// as FormArray;// this.fb.array([]) as FormArray;
    if (field.path.length > 1) {
      form.get(this.parentControlPath(field.path)).removeControl(field.name);
    } else {
      form.removeControl(field.name);
    }
    unset(this.form.workspace, this.fieldControlPath(field.path));
    this.events$.next({ action: 'update' });
    return form;
  }

  createForm(field, ctx = this) {
    let form = this.fb.group({
      name: [field.name],
      type: [field.type],
    });
    form.addControl('size', this.fb.control(''));
    form.addControl('required', this.fb.control(''));
    form.addControl('hideLabel', this.fb.control(''));
    form.addControl('readonly', this.fb.control(''));
    form.addControl('unique', this.fb.control(''));
    if (field.options) {
      let settings = this.fb.group({});
      form.addControl('settings', settings);
      if (field.type < 112) {

      }
    }
    if (field.fields && field.fields.length > 0) {
      let fields = this.fb.group({});
      form.addControl('fields', fields);
      field.fields.forEach(child => fields.addControl(child.name, this.createForm(child)));
    }
    return form;
  }

  initForm(fields) {
    let form = this.fb.group({})//.array(fields.map(this.createForm));
    if (isPlainObject(fields)) {
      fields = values(fields);
    }
    for (let field of fields) {
      field.form = this.createForm(field)
      form.addControl(field.name, field.form);
    }
    return form;
  }

  findById(fields, ffield) {
    fields.forEach(field => {
      if (field._id) {
        if (field._id === ffield._id) {
          field = ffield;
          return;
        }
      }
      if (field.fields) {
        let found = this.findById(field.fields, ffield);
        if (found.length === 1) {
          found[0] = ffield;
          return;
        }
      }
    })
    return fields;
  }

  set fields(fieldsArr) {
    const fields = cloneDeep(fieldsArr);
    const form = this._form.getValue();
    let formFields = getSaved(form.fields);
    fields.forEach((ffield) => {
      if (ffield._id) {
        this.findById(formFields, cloneDeep(ffield));
      } else {
        let section = formFields.find(field => field.type === 114);
        if (!section) {
          section = {
            type: 114,
            name: 'New section',
            isActive: true,
            fields: [],
            path: ['New section'],
            pathId: 'New section114'
          }

          formFields = [section]
        }
        section.fields = section.fields.filter(field => {
          return !(field.name === ffield.name && field.type === ffield.type);
        });
        section.fields.push(ffield);
      }

    })
    this.form.fields = formFields;
    this.events$.next({ action: 'update' });
    // this.form = form;
  }

  get pathIds() {
    return this._pathIds.concat(['sidebar-list', 'root-list']);
  }

  addPathId(pathId: string) {
    if (pathId) {
      this._pathIds.push(pathId);
    }
    return this.pathIds;
  }

  get fields$() {
    return this._fields.asObservable()
  }

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
