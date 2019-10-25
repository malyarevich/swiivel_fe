import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { v4 as uuid } from "uuid";
import { cloneDeep, isEmpty, flatMap, set, unset, get, has, setWith, isPlainObject, values, transform } from "lodash";
import { Form } from "src/app/models/data-collection/form.model";
import { Field } from "src/app/models/data-collection/field.model";
import { FormBuilder, FormArray } from '@angular/forms';
import { unescapeIdentifier } from '@angular/compiler';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
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
      } else if (event.action === 'update') {
        console.dir(this.form.form.value);
        console.dir(this.form.workspace)
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
    return flatMap(paths.slice(0, -1), (path => { return [path, 'fields'] }))
  }

  fieldControlPath(paths) {
    return flatMap(paths, (path => { return [path, 'fields'] })).slice(0, -1)
  }

  addWrapper(section?, field?) {
    let form = cloneDeep(this.form);
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
    let formGroup = this.createForm(section);
    if (!field) formGroup.addControl('fields', this.fb.group({}))
    this.form.form = this.fb.group({ [section.name]: formGroup });
    this.form.workspace = [section];
    return this.form;
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
  getFieldSpaceParent(field) {
    let parentPath = field.path.slice(0, -1).reduce((paths, path, idx) => {
      if (paths === null) return null;
      let searchArray = get(this.form.workspace, [...paths], false);
      if (searchArray === false && idx === 0) {
        searchArray = this.form.workspace;
      }
      if (searchArray) {
        let foundIdx = searchArray.findIndex(searchField => searchField.name === path);
        if (foundIdx !== -1) {
          paths.push(foundIdx, 'fields');
          return paths;
        } else return null;
      } else {
        debugger;
      }
    }, []);
    if (parentPath === null) return null;
    let parent = get(this.form.workspace, parentPath);
    return parent;
  }
  removeFieldSpace(field) {
    let parentPath = field.path.slice(0, -1).reduce((paths, path, idx) => {
      if (paths === null) return null;
      let searchArray = get(this.form.workspace, [...paths], false);
      if (searchArray === false && idx === 0) {
        searchArray = this.form.workspace;
      }
      if (searchArray) {
        let foundIdx = searchArray.findIndex(searchField => searchField.name === path);
        if (foundIdx !== -1) {
          paths.push(foundIdx, 'fields');
          return paths;
        } else return null;
      } else {
        debugger;
      }
    }, []);
    if (parentPath === null) return null;
    let parent = get(this.form.workspace, parentPath);
    unset(this.form.workspace, [...parentPath, field.name])
    parent = set(this.form.workspace, parentPath, parent.filter(pp => !(pp.name === field.name && pp.type === field.type)));
    return parent;
  }
  getFieldFormParent(field) {
    let form = this.form.form;
    if (Object.keys(form.controls).length === 0) return 0;
    if (field._id) {

    } else {
      if (field.path) {
        let parentPath = this.parentControlPath(field.path);
        let parent = form.get(parentPath);
        if (!parent) {
          for (let key of Object.keys(form.controls)) {
            parent = form.get([key, 'fields', ...parentPath])
            if (parent) {
              field.path.unshift(key);
              break;
            }
          }
        }
        return parent;
      }
      else {
        return null;
      }
    }
  }
  moveField(event: CdkDragDrop<any>) {
    if (event.container.id === event.previousContainer.id) {
      let rootNames = this.form.workspace.map((root: any) => root.name);
      let path = event.item.data.path.slice();
      if (!rootNames.includes(path[0])) {
        // path.u
      }
      let spaceParent = this.getFieldSpaceParent(event.item.data);
      debugger;

    }
    console.log(event);
  }
  addField(field, ancestors?, only?) {
    if (!field || !field.name) return null;
    if (Array.isArray(ancestors) && ancestors.length === 0) ancestors = null;
    console.groupCollapsed(`Adding field ${field.name}`);
    let form = this.form.form;// this.fb.array([]) as FormArray;
    let formParent = this.getFieldFormParent(field);
    if (formParent === 0 && field.type !== 114) {
      this.addWrapper();
      this.addField(field, ancestors, only);
    } else if (!!formParent) {
      formParent.addControl(field.name, this.createForm(field));
      let spaceParent = this.getFieldSpaceParent(field);
      if (spaceParent) {
        console.log(cloneDeep(spaceParent))

        if (!spaceParent.find(a => a.name === field.name && a.type === field.type)) {
          if (only) {
            spaceParent.push({ ...field, fields: [] });
          } else {
            spaceParent.push(field)
          }
        }
      } else {
        if (ancestors) {
          ancestors = ancestors.slice();
          ancestors.reverse();
          let prev;
          ancestors.forEach((ancestor) => {
            spaceParent = this.getFieldSpaceParent(ancestor);
            if (!spaceParent) {
              let preparent = this.getFieldSpaceParent(prev);
              preparent.find(pp => pp.name === prev.name && pp.type === prev.type)['fields'].push({ ...ancestor, fields: [] })
              prev = ancestor;
            } else {
              prev = ancestor;
            }
          });
          spaceParent = this.getFieldSpaceParent(field);
          spaceParent.push(field);
        } else {
          debugger;
        }
      }
    } else {
      if (ancestors) {
        ancestors = ancestors.slice();
        let parent = ancestors.shift();
        parent = this.addField(parent, ancestors, true);
        if (parent) {
          this.addField(field);
        } else debugger;
      } else {
        console.error('oops');
        debugger;
        console.log(ancestors);
        return false;
      }

    }
    this.events$.next({ action: 'added', field });
    this.events$.next({ action: 'update' });
    console.groupEnd();
    return form;

  }


  remove(field) {
    this.events$.next({ action: 'removeit', field });
  }

  removeField(field) {
    console.groupCollapsed(`Removing field`);
    console.dir(cloneDeep(field));

    let formParent = this.getFieldFormParent(field);
    let spaceParent = this.removeFieldSpace(field);
    if (formParent) {
      formParent.removeControl(field.name);
      // field.isActive = false;
      // spaceParent = spaceParent.filter(spaceField => !(spaceField.name === field.name && spaceField.type === field.type)).slice();
      console.dir(cloneDeep(formParent));
      console.dir(cloneDeep(spaceParent));
      // this.form.workspace = spaceParent.slice();

      //   formParent.removeControl(field.name);
      //   let spaceParent = this.getFieldSpaceParent(field);
      //   spaceParent = spaceParent.filter(spaceField => !(spaceField.name === field.name && spaceField.type === field.type))
      // }
      // this.events$.next({ action: 'removed', field });
      // this.events$.next({ action: 'update' });
    }
    console.groupEnd();
    this.events$.next({ action: 'removed', field });
    this.events$.next({ action: 'update' });
    return this.form.form;
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
    console.groupCollapsed(`Creating form`);
    console.log(fields);
    let form = this.fb.group({})//.array(fields.map(this.createForm));
    if (isPlainObject(fields)) {
      fields = values(fields);
    }
    for (let field of fields) {
      field.form = this.createForm(field)
      form.addControl(field.name, field.form);
    }
    console.groupEnd();
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
