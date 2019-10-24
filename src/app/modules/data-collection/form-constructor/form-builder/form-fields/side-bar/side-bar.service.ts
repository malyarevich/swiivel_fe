import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { v4 as uuid } from "uuid";
import { cloneDeep, isEmpty, flatMap, set, unset, get, has, setWith, isPlainObject, values, transform } from "lodash";
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
  FormsById = {};
  public fieldTypes = {
    'schema': [],
    'mapped': []
  }
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
    _form.workspace = cloneDeep(_form.fields);
    _form.form = this.initForm(_form.fields);
    // _form.fields.forEach((field) => set(_form.workspace, field.path, field));
    console.log(`form updated`, _form);
    this._form.next(_form);
    this.events$.next({ action: 'update' });
  }
  findFieldById(id) {
    return this.FormsById[id];
  }
  getFormFor(field) {
    // if (field.path) {
    //   let fieldForm = this.form.form.get(this.fieldControlPath(field.path));
    //   if (!fieldForm) {
    //     for (let key of Object.keys(this.form.form.controls)) {
    //       let pp = this.form.form.get(key).get('fields').get(this.fieldControlPath(field.path));
    //       if (pp) return pp;
    //     }
    //   }
    //   return fieldForm;
    // } else {
    if (!!field._id) {
      return this.findFieldById(field._id);
    } else if (!!field.path) {
      if (field.path.length > 1) {
        let found = this.form.form.get(this.fieldControlPath(field.path));
        if (!found) {
          for (let key of Object.keys(this.form.form.controls)) {
            found = this.form.form.get(key).get('fields').get(this.fieldControlPath(field.path));
            if (found) {
              break;
            }
          }
        }
        return found;
      }
    } else {
      return null
    }
    // }
  }
  resetForm() {
    let form = cloneDeep(this.form);
    form.fields = [];
    form.form = null;
    this.form = form;
    this.form.form.updateValueAndValidity()
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
      return flatMap(paths, (path => { return [path, 'fields'] })).slice(0, -1)
    }
  }

  addWrapper(section?, field?) {
    let form = cloneDeep(this.form.form);
    if (!section) {
      section = {
        type: 114,
        name: 'New section',
        isActive: true,
        fields: [],
        path: ['New section'],
        pathId: 'New section114'
      }
    }
    if (field) section.fields = [field];
    let wrapper = this.createForm(section);
    wrapper.addControl('fields', form);
    this.form.form = this.fb.group({ [section.name]: wrapper });
    section.fields = field ? [field] : this.form.workspace;
    this.form.workspace = [section];
    console.log(this.form.workspace)
    this.events$.next({ action: 'update' });
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
  // createWorkspace(field) {
  //   if (!has(this.form.workspace, this.parentControlPath(field.path))) {
  //     set(this.form.workspace, this.parentControlPath(field.path), field)
  //   }
  //   return get(this.form.workspace, this.parentControlPath(field.path));
  // }
  addField(field, root?) {
    if (!field.name) return null;
    let form = this.form.form;// this.fb.array([]) as FormArray;
    if (field._id) {
      let paths = [];
      let parent = this.FormsById[field._id].parent;
      this.FormsById[field._id].parent.addControl(field.name, this.createForm(field));
      while (parent = parent.parent) {
        if (parent.get('name')) {
          paths.push(parent.get('name').value);
        }
      }
      paths.reverse()
      let parentPath = transform(paths, (result, path, index, fields) => {
        if (result.length === 0) {
          fields = this.form.workspace
        } else {
          fields = get(this.form.workspace, result);
        }
        let position = fields.findIndex((field) => field.name === path);
        result.push(position, 'fields');
        return position;
      }, []);
      let parentArr = get(this.form.workspace, parentPath);
      if (parentArr) parentArr.push(field);
      // this.form.form.get(parentPath.slice(0, -2)).addControl(field.name, this.createForm(field));
    } else if (field.path && field.path.length > 1) {
      let parent = form.get(this.parentControlPath(field.path));
      if (!parent) {
        for (let key of Object.keys(form.controls)) {
          parent = form.get(key).get('fields').get(this.parentControlPath(field.path));
          if (parent) {
            field.path.unshift(key);
            break;
          }
        }
      }
      if (parent) {
        let parentPath = transform(field.path, (result, path, index, fields) => {
          if (result.length === 0) {
            fields = this.form.workspace
          } else {
            fields = get(this.form.workspace, result);
          }
          let position = fields.findIndex((field) => field.name === path);
          result.push(position, 'fields');
          return position;
        }, []);
        let parentArr = get(this.form.workspace, parentPath.slice(0, -2));
        if (parentArr) parentArr.push(field);
        parent.addControl(field.name, this.createForm(field));
      }
    } else {
      let wrapper = this.form.workspace[0];
      if (wrapper) wrapper.fields.push(field);
      else {
        this.addWrapper(null, field);
        // this.form.workspace[0].fields.push(field);
      }
      wrapper = form.get([Object.keys(form.controls)[0], 'fields']);
      if (wrapper) wrapper.addControl(field.name, this.createForm(field));
    }
    this.events$.next({ action: 'added', field });
    this.events$.next({ action: 'update' });

    return form;
  }
  getParentName(control) {
    let parent = control.parent;
    // if (control.parent)
  }

  removeField(field) {
    if (!field.name) return null;
    let form = this.form.form;
    if (field._id) {
      let paths = [];
      let parent = this.FormsById[field._id].parent;
      if (!parent) {
        paths.push(field.name);
      } else {
        while (parent = parent.parent) {
          if (parent.get('name')) {
            paths.push(parent.get('name').value);
          }
        }
        paths.reverse()
      }
      let parentPath = transform(paths, (result, path, index, fields) => {
        if (result.length === 0) {
          fields = this.form.workspace
        } else {
          fields = get(this.form.workspace, result);
        }
        let position = fields.findIndex((field) => field.name === path);
        result.push(position, 'fields');
        return position;
      }, []);
      let parentArr = get(this.form.workspace, parentPath);
      set(this.form.workspace, parentPath, parentArr.filter((child) => child._id !== field._id));
      this.FormsById[field._id].parent.removeControl(field.name);
    }
    else if (field.path && field.path.length > 1) {
      let parent = form.get(this.parentControlPath(field.path));
      if (!parent) {
        for (let key of Object.keys(form.controls)) {
          let pp = form.get(key).get('fields').get(this.parentControlPath(field.path));
          if (pp) {
            let paths = [key, ...field.path];
            let parentPath = transform(paths, (result, path, index, fields) => {
              if (result.length === 0) {
                fields = this.form.workspace
              } else {
                fields = get(this.form.workspace, result);
              }
              let position = fields.findIndex((field) => field.name === path);
              result.push(position, 'fields');
              return position;
            }, []);
            let parentArr = get(this.form.workspace, parentPath.slice(0, -2));
            set(this.form.workspace, parentPath.slice(0, -2), parentArr.filter((child) => child.name !== field.name));
            pp.removeControl(field.name);
          }
        }
      }
    }
    this.events$.next({ action: 'removed', field });
    this.events$.next({ action: 'update' });
    return form;
  }



  createForm(field, ctx = this) {
    let schema = this.fieldTypes.mapped.find(ftype => ftype.type === field.type && ftype.mapped === field.mapped && ftype.name === field.name);
    if (!schema) schema = this.fieldTypes.schema.find(ftype => ftype.type === field.type);
    let obj = Object.assign({}, schema, field);
    delete obj.fields;
    let form = this.fb.group({});
    for (let field in obj) {
      if (isPlainObject(obj[field])) {
        form.addControl(field.toString(), this.fb.group(obj[field]));
      } else {
        form.addControl(field, this.fb.control(obj[field]));
      }
    }
    if (field.fields && field.fields.length > 0) {
      let fields = this.fb.group({});
      form.addControl('fields', fields);
      field.fields.forEach(child => fields.addControl(child.name, this.createForm(child)));
    }
    if (field._id) {
      this.FormsById[field._id] = form;
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

  set fie2lds(fieldsArr) {
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
