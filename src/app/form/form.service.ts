import { Injectable } from '@angular/core';

import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { ApiService } from '@app/core/api.service';
import { cloneDeep, flatMap, get, isArrayLike, isPlainObject, isString, set, unset, values } from 'lodash';
import { BehaviorSubject, Subject, from, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

const flatten = (fields = []) => {
  const result = [];
  if (!isArrayLike(fields)) { fields = []; }
  for (const field of fields) {
    if (field.fields) {
      result.push(...flatten(field.fields));
    }
    result.push(field);
  }
  return result;
};

const joinForm = (field, path = [], formFields = []) => {
  let result;
  if (field.fields) {
    path.push(field.name);
    field.fields = field.fields.map(cfield => joinForm(cfield, path, formFields));
  }
  const found = formFields.find(ffield => {
    return field.name === ffield.name && field.type === ffield.type;
  });
  if (found) {
    if (field.type < 112) {
      found.isActive = true;
      result = found;
    } else {
      const fields = cloneDeep(field.fields);
      field = cloneDeep(found);
      field.isActive = true;
      field.fields = fields;
      result = field;
    }
  } else {
    field.isActive = false;
    result = field;
  }
  return result;
};

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private _savedFields;
  private mongoId: string;
  private fieldSubject$: BehaviorSubject<any> = new BehaviorSubject(null);
  private sectionSubject$: BehaviorSubject<any> = new BehaviorSubject('intro');
  private sectionsSubject$: BehaviorSubject<any> = new BehaviorSubject(null);
  private eventSubject$: Subject<any> = new Subject();
  private sidebarSubject$: BehaviorSubject<any> = new BehaviorSubject(null);
  private formTemplateSubject$: BehaviorSubject<any> = new BehaviorSubject(null);
  // public form: FormGroup;
  private formData = {};
  _form = new BehaviorSubject(null);
  formsById = {};
  public fieldTypes = {
    schema: [],
    mapped: []
  };

  constructor(private fb: FormBuilder, private api: ApiService) {
    this.api.getSidebarFields().subscribe((fields) => {
      const formFields = (this.form && this.form.get('fields')) ? flatten(this.form.get('fields').value) : [];
      this.sidebarSubject$.next(fields.map(field => joinForm(field, [], formFields)).slice());
    });
    this.sidebarSubject$.subscribe((fields) => {
      console.log(fields);
    });
  }

  toFormGroup(formData) {
    
  }

  loadForm(formId?: string) {
    if (formId !== 'new') {
      this.api.getFormTemplate(formId).subscribe(data => {
        if (data) {
          this.form = this.initForm(data);
        }
      });
    } else {
      this.form = this.initForm({ type: 'registration', name: null });
    }
  }

  // addWrapper(section?, field?) {
  //   let form = this.form;
  //   if (!section) {
  //     section = {
  //       type: 114,
  //       name: 'New section',
  //       isActive: true,
  //       fields: [],
  //       path: ['New section'],
  //       pathId: 'New section114'
  //     };
  //   }
  //   if (field) { section.fields = [field]; }
  //   const formGroup = this.createField(section);
  //   if (!field) { formGroup.addControl('fields', this.fb.array([])); }
  //   this.form.form = this.fb.array([{ [section.name]: formGroup }]);
  //   this.form.fields = [section];
  //   return this.form;

  //   // if (!field) { formGroup.addControl('fields', this.fb.array([])); }
  //   // form = this.fb.array([formGroup]);
  //   // this.form.workspace = [section];
  //   // console.log('FORM WRAPPER', form);
  //   // return section;
  // }


  // parentControlPath(paths) {
  //   return flatMap(paths.slice(0, -1), (path => [path, 'fields']));
  // }

  // fieldControlPath(paths) {
  //   return flatMap(paths, (path => [path, 'fields'])).slice(0, -1);
  // }

  // getFieldSpace(field) {
  //   if (!field || !field.path) { return null; }
  //   const spacePath = this.getFieldSpacePath(field);
  //   if (spacePath === null) { return null; }
  //   const space = get(this.form.workspace, spacePath);
  //   return space;
  // }
  // removeFieldSpace(field) {
  //   const parentPath = field.path.slice(0, -1).reduce((paths, path, idx) => {
  //     if (paths === null) { return null; }
  //     let searchArray = get(this.form.workspace, [...paths], false);
  //     if (searchArray === false && idx === 0) {
  //       searchArray = this.form.workspace;
  //     }
  //     if (searchArray) {
  //       const foundIdx = searchArray.findIndex(searchField => searchField.name === path);
  //       if (foundIdx !== -1) {
  //         paths.push(foundIdx, 'fields');
  //         return paths;
  //       } else { return null; }
  //     } else {
  //       debugger;
  //     }
  //   }, []);
  //   if (parentPath === null) { return null; }
  //   let parent = get(this.form.workspace, parentPath);
  //   unset(this.form.workspace, [...parentPath, field.name]);
  //   parent = set(this.form.workspace, parentPath, parent.filter(pp => !(pp.name === field.name && pp.type === field.type)));
  //   return parent;
  // }
  // getFieldForm(field) {
  //   const form = this.form.form;
  //   if (Object.keys(form.controls).length === 0) { return 0; }
  //   if (field._id) {

  //   } else {
  //     if (field.path) {
  //       const parentPath = this.parentControlPath(field.path);
  //       let control = form.get([...parentPath, field.name]);
  //       if (!control) {
  //         for (const key of Object.keys(form.controls)) {
  //           control = form.get([key, 'fields', ...parentPath, field.name]);
  //           if (control) {
  //             field.path.unshift(key);
  //             break;
  //           }
  //         }
  //       }
  //       return control;
  //     } else {
  //       return null;
  //     }
  //   }
  // }
  // getFieldFormParent(field) {
  //   const form = this.form.get('form');
  //   if (!form || !form.controls || Object.keys(form.controls).length === 0) { return 0; }
  //   if (field._id) {

  //   } else {
  //     if (field.path) {
  //       const parentPath = this.parentControlPath(field.path);
  //       let parent = form.get(parentPath);
  //       if (!parent) {
  //         for (const key of Object.keys(form.controls)) {
  //           parent = form.get([key, 'fields', ...parentPath]);
  //           if (parent) {
  //             field.path.unshift(key);
  //             break;
  //           }
  //         }
  //       }
  //       return parent;
  //     } else {
  //       return null;
  //     }
  //   }
  // }
  moveField(event: CdkDragDrop<any>) {
    console.groupCollapsed(`Moving field ${event.item.data.name}`);
    // if (event.container.id === event.previousContainer.id) {
    //   const rootNames = this.form.workspace.map((root: any) => root.name);
    //   const path = event.item.data.path.slice();
    //   if (!rootNames.includes(path[0])) {
    //     const wrapper = this.form.workspace.find((section) => section.fields.find((s) => s.name === path[0]));
    //     if (wrapper) { event.item.data.path.unshift(wrapper.name); }
    //   }
    //   const spaceParent = this.getFieldSpaceParent(event.item.data);
    //   const space = this.getFieldSpace(event.item.data);
    //   if (spaceParent && space) {
    //     const position = spaceParent.indexOf(space);
    //     if (position !== -1) {
    //       spaceParent.splice(event.currentIndex, 0, spaceParent.splice(position, 1)[0]);
    //       this.events$.next({ action: 'update' });
    //     }
    //   }
    // } else if (event.container.id !== event.previousContainer.id) {
    //   const rootNames = this.form.workspace.map((root: any) => root.name);
    //   const path = event.item.data.path.slice();
    //   if (!rootNames.includes(path[0])) {
    //     const wrapper = this.form.workspace.find((section) => section.fields.find((s) => s.name === path[0]));
    //     if (wrapper) { event.item.data.path.unshift(wrapper.name); }
    //   }
    //   const spaceParent = this.getFieldSpaceParent(event.item.data);
    //   const formParent = this.getFieldFormParent(event.item.data);
    //   const fieldForm = formParent.get(event.item.data.name);
    //   const target = this.getFieldSpace(event.container.data);
    //   const targetForm = this.getFieldForm(event.container.data);
    //   const space = this.getFieldSpace(event.item.data);
    //   console.log(cloneDeep(formParent));
    //   console.log(cloneDeep(fieldForm));
    //   console.log(cloneDeep(targetForm));
    //   if (spaceParent && space && target && fieldForm && targetForm) {
    //     const position = spaceParent.indexOf(space);
    //     if (position !== -1) {
    //       // transferArrayItem(spaceParent, target.fields, position, event.currentIndex);
    //       const moving = spaceParent.splice(position, 1)[0];
    //       moving.path = [...event.container.data.path, moving.name];
    //       moving.pathId = moving.path.join('') + moving.type;
    //       target.fields.splice(event.currentIndex, 0, moving);
    //       formParent.removeControl(moving.name);
    //       fieldForm.patchValue({
    //         path: moving.path,
    //         pathId: moving.pathId
    //       });
    //       targetForm.get('fields').addControl(moving.name, fieldForm);
    //       fieldForm.setParent(targetForm.get('fields'));
    //       console.log(cloneDeep(formParent));
    //       console.log(cloneDeep(fieldForm));
    //       console.log(cloneDeep(targetForm));
    //       this.events$.next({ action: 'update' });
    //     }
    //   }
    // }
    console.groupEnd();
  }
  prependPath(field, path) {
    field.path.splice(0, 0, path);
    field.pathId = path + field.pathId;
    if (Array.isArray(field.fields)) { field.fields.forEach(field => this.prependPath(field, path)); }
    return field;
  }
  add2Field(field, ancestors?, only?) {
    console.log('ADD FIELD ARGS', field, ancestors, only)
    // if (!field || !field.name) { return null; }
    // if (Array.isArray(ancestors) && ancestors.length === 0) { ancestors = null; }
    // console.groupCollapsed(`Adding field ${field.name}`);
    // const form = this.form.get('form'); // this.fb.array([]) as FormArray;
    // const formParent = this.getFieldFormParent(field);
    // if (formParent === 0 && field.type !== 114) {
    //   const wrapper = this.addWrapper();
    //   this.addField(field, ancestors, only);
    // } else if (!!formParent) {
    //   formParent.addControl(field.name, this.createField(field));
    //   let spaceParent = this.getFieldSpaceParent(field);
    //   if (spaceParent) {
    //     if (!spaceParent.find(a => a.name === field.name && a.type === field.type)) {
    //       if (only) {
    //         spaceParent.push({ ...field, fields: [] });
    //       } else {
    //         spaceParent.push(field);
    //       }
    //     }
    //   } else {
    //     if (ancestors) {
    //       ancestors = ancestors.slice();
    //       ancestors.reverse();
    //       let prev;
    //       ancestors.forEach((ancestor) => {
    //         spaceParent = this.getFieldSpaceParent(ancestor);
    //         if (!spaceParent) {
    //           const preparent = this.getFieldSpaceParent(prev);
    //           preparent.find(pp => pp.name === prev.name && pp.type === prev.type).fields.push({ ...ancestor, fields: [] });
    //           prev = ancestor;
    //         } else {
    //           prev = ancestor;
    //         }
    //       });
    //       spaceParent = this.getFieldSpaceParent(field);
    //       spaceParent.push(field);
    //     } else {
    //       debugger;
    //     }
    //   }
    // } else {
    //   if (ancestors) {
    //     ancestors = ancestors.slice();
    //     let parent = ancestors.shift();
    //     parent = this.addField(parent, ancestors, true);
    //     if (parent) {
    //       this.addField(field);
    //     } else { debugger; }
    //   } else {
    //     console.error('oops');
    //     debugger;
    //     console.log(ancestors);
    //     return false;
    //   }

    // }
    // this.events$.next({ action: 'added', field });
    // this.events$.next({ action: 'update' });
    // console.log('set ivents');
    // console.groupEnd();
    // return form;
  }


  remove(field) {
    this.events$.next({ action: 'removeit', field });
  }

  getFieldSpaceParentPath(field) {
    // const parentPath = field.path.slice(0, -1).reduce((paths, path, idx) => {
    //   if (paths === null) { return null; }
    //   let searchArray = get(this.form.workspace, [...paths], false);
    //   if (searchArray === false && idx === 0) {
    //     searchArray = this.form.workspace;
    //   }
    //   if (searchArray) {
    //     const foundIdx = searchArray.findIndex(searchField => searchField.name === path);
    //     if (foundIdx !== -1) {
    //       paths.push(foundIdx, 'fields');
    //       return paths;
    //     } else { return null; }
    //   } else {
    //     debugger;
    //   }
    // }, []);
    // return parentPath;
  }
  getFieldSpacePath(field) {
    // const fieldPath = field.path.reduce((paths, path, idx) => {
    //   if (paths === null) { return null; }
    //   let searchArray = get(this.form.workspace, [...paths], false);
    //   if (searchArray === false && idx === 0) {
    //     searchArray = this.form.workspace;
    //   }
    //   if (searchArray) {
    //     const foundIdx = searchArray.findIndex(searchField => searchField.name === path);
    //     if (foundIdx !== -1) {
    //       paths.push(foundIdx, 'fields');
    //       return paths;
    //     } else { return null; }
    //   } else {
    //     debugger;
    //   }
    // }, []);
    // if (fieldPath) { fieldPath.pop(); }
    // return fieldPath;
  }
  getFieldSpaceParent(field) {
    // if (!field || !field.path) { return null; }
    // const parentPath = this.getFieldSpaceParentPath(field);
    // if (parentPath === null) { return null; }
    // const parent = get(this.form.workspace, parentPath);
    // return parent;
  }

  removeField(control: AbstractControl) {
    console.groupCollapsed(`Removing field`);
    let controlName = control.get('name').value;
    if (control.parent instanceof FormArray) {
      let parent = control.parent as FormArray;
      let index = 0;
      for (const child of parent.controls) {
        if (child.get('name').value === controlName) {
          console.log(child);
          console.groupEnd();
          parent.removeAt(index);
          break;
        }
        index++;
      }
    } else {
      console.log(cloneDeep(control));
      console.groupEnd();
      control.parent.removeControl(controlName);
    }
  }
  getParentPaths(control) {
    let parent;
    let paths = [];
    while (parent = control.parent) {
      if (parent) {
        let name = parent.get('name'); 
        if (name && !parent.get('owner_id')) {
          paths.unshift(name.value);
        }
      }
      control = parent;
    }
    return paths;
  }
  getListsIds(ids = [], parent?) {
    if (!parent) parent = this.form;
    let fields = parent.get('fields')
    if (fields) {
      if (parent !== this.form) {
        let thisId = [...this.getParentPaths(parent), parent.get('name').value].join('');
        ids.push(thisId);
      }
      (fields as FormArray).controls.slice().map(control => this.getListsIds(ids, control));
    }
    return ids;
  }
  addFieldFromSB(field: object): FormGroup {
    field = cloneDeep(field);
    field['isExpanded'] = true;
    
    let parent, parentPath, fieldName, fieldValue;
    fieldName = field['name'] as string;
    fieldValue = field;
    parentPath = field['path'].slice(0, -1);
    if (parentPath.length > 0) {
      parent = this.findControl(parentPath);
    } else {
      let fields = this.form.get('fields') as FormArray;
      if (fields) {
        parent = fields.at(0);
      }
    }
    if (!parent) {
      let wrapper = this.fb.group({
        type: 114,
        name: 'New section',
        isExpanded: true,
        options: this.fb.group({
          size: 3,
          required: false,
          unique: false,
          hideLabel: false,
          readonly: false
        })
      });
      let fields = this.form.get('fields') as FormArray;
      if (!fields) {
        let fieldsArray = this.fb.array([]);
        this.addFieldArray('fields', [field], wrapper);
        fieldsArray.push(wrapper);
        console.log(cloneDeep(wrapper))
        this.form.addControl('fields', fieldsArray);
      } else {
        fields.push(wrapper);
      }
      parent = this.findControl(field['path'], this.form)
    } else {
      parent.get('fields').push(this.initForm(field));
    }
    return parent;
  }

  removeFieldFromSB(field) {
    field = cloneDeep(field);
    console.groupCollapsed(`Removing field ${field.name} from sb`);
    const control = this.findControl(field['path']);
    console.log(control);
    console.groupEnd();
    if (control) {
      this.removeField(control);
    }
  }




  createField(field, ctx = this) {
    let schema = this.fieldTypes.mapped.find(ftype => ftype.type === field.type && ftype.mapped === field.mapped && ftype.name === field.name);
    if (!schema) { schema = this.fieldTypes.schema.find(ftype => ftype.type === field.type); }
    const obj = Object.assign({}, schema, field);
    delete obj.fields;
    const form = this.fb.group({});
    for (const field in obj) {
      if (isPlainObject(obj[field])) {
        form.addControl(field.toString(), this.fb.group(obj[field]));
      } else {
        form.addControl(field, this.fb.control(obj[field]));
      }
    }
    if (field.fields && field.fields.length >= 0) {
      const fields = this.fb.array([]);
      form.addControl('fields', fields);
      field.fields.forEach(child => fields.push(this.fb.control(this.createField(child))));
    }
    return form;
  }
  findControl(path, parent?) {
    path = path.slice();
    if (!parent) parent = this.form;
    let control = parent.get(path);
    if (!control) {
      let children = parent.get('fields') as FormArray;
      if (children) {
        for (const child of children.controls) {
          if (child.get('name')) {
            let childName = child.get('name').value;
            if (childName === path[0]) {
              if (path.length > 1) {
                path.shift();
                control = this.findControl(path, child);
              } else {
                control = child;
              }
              break;
            } else {
              if (child.get('fields')) {
                control = this.findControl(path, child);
              }
            }
          } 
            if (child.get('fields')) {
              control = this.findControl(path, child);
            }
        }
      }
      
    }
    return control;
  } 
  
  addField(fieldName: string, fieldValue: any, parent?): FormGroup {
    if (!parent) parent = this.form;
    else {
      if (isArrayLike(parent) || isString(parent)) {
        parent = this.form.get(parent);
        
      }
    }
    let field = this.fb.control({value: fieldValue});
    (parent as FormGroup).addControl(fieldName, field);
    return parent.get(fieldName);
  }

  addFields(fields: any[], parent: FormGroup) {
    let fieldsArray = this.fb.array([]);
    for (const field of fields) {
      let fieldFields;
      if ('fields' in Object.keys(field)) {
        if (Array.isArray(field.fields)) {
          let fieldFields = cloneDeep(field.fields);
          delete field.fields;
        }
      }
      let fieldGroup = this.fb.group(field);
      if (fieldFields) {
        this.addFields(fieldFields, fieldGroup);
      }
      fieldsArray.push(fieldGroup);
    }
    if (!parent.get('fields')) {
      parent.addControl('fields', fieldsArray);
    } else {
      parent.get('fields').setValue(fieldsArray.value);
    }
    return parent.get('fields');
  }
  addFieldArray(fieldName, fieldValues: any[], parent?) {
    if (!parent) parent = this.form;
    else {
      if (isArrayLike(parent) || isString(parent)) {
        parent = this.form.get(parent);
      }
    }
    let fields = this.fb.array([]);
    for (let fieldValue of fieldValues) {
      let field = this.initForm(fieldValue);
      fields.push(field);
    }
    if (parent.get(fieldName)) {
      parent.removeControl(fieldName);
    }
    (parent as FormGroup).addControl(fieldName, fields);
    
    return parent.get(fieldName);
  }

  addFieldGroup(fieldName, fieldValue: object, parent?): FormGroup {
    if (!parent) parent = this.form;
    else {
      if (isArrayLike(parent) || isString(parent)) {
        parent = this.form.get(parent);
      }
    }
    if (parent.get(fieldName)) {
      parent.removeControl(fieldName);
    }
    (parent as FormGroup).addControl(fieldName, this.fb.group(fieldValue));
    return parent.get(fieldName);
  }

  initForm(data?) {
    console.groupCollapsed(`Creating formgroup ${data.name || ''}`);
    const form = this.fb.group({});
    if (data) {
      if ('fields' in Object.keys(data)) {
        this.addFields(data.fields, form);
        delete data.fields;
      }
      for (const key of Object.keys(data)) {
        if (isArrayLike(data[key])) {
          if (key === 'fields') {
            this.addFieldArray(key, data[key], form);
          } else {
            this.addField(key, data[key], form);
          }
        } else if (isPlainObject(data[key])) {
          this.addFieldGroup(key, data[key], form);
        } else {
          this.addField(key, data[key], form);
        }
      }
      if (data.path && !data.options) {
        this.addFieldGroup('options', {
          size: 3,
          required: false,
          unique: false,
          hideLabel: false,
          readonly: false
        }, form);
      }
      form.patchValue(data);
    } else {
      this.addField('name', '', form);
      this.addField('type', 'registration', form);
    }
    console.groupEnd();
    return form;
  }
  
  saveForm() {
    console.groupCollapsed('Saving form');
    if (this.form.valid) {
      const data = this.form.value;
      if (this.form.get('_id')) {
        return this.api.updateFormTemplate(data._id, data).pipe(
          tap(res => {
            console.log('RESPONSE EDIT  FORM', res);
          })
        );
      } else {
        return this.api.saveNewForm(data).pipe(
          tap(res => {
            console.log('RESPONSE NEW  FORM', res);
          })
        );
      }


    } else {
      console.error(this.form.errors);
      return throwError(this.form.errors);
    }
    console.groupEnd();
  }

  get form(): FormGroup {
    return this._form.getValue();
  }

  get form$() {
    return this._form.asObservable();
  }

  set form(form: FormGroup) {
    this._form.next(form);
  }

  set formTemplate(data: any) {
    this.formTemplateSubject$.next(data);
  }

  get formTemplate() {
    return this.formTemplateSubject$.getValue();
  }

  get formTemplate$() {
    return this.formTemplateSubject$.asObservable();
  }

  get sidebar() {
    return this.sidebarSubject$.asObservable();
  }

  set sidebar(data: any) {
    this.sidebarSubject$.next(data);
  }

  get fields$() {
    return this.fieldSubject$.asObservable();
  }
  get fields() {
    return this.fieldSubject$.getValue();
  }


  set section(current: any) {
    this.sectionSubject$.next(current);
  }

  get section() {
    return this.sectionSubject$.getValue();
  }

  get section$() {
    return this.sectionSubject$.asObservable();
  }

  set sections(current: any) {
    this.sectionsSubject$.next(current);
  }

  get sections() {
    return this.sectionsSubject$.getValue();
  }

  get sections$() {
    return this.sectionsSubject$.asObservable();
  }

  get eventO$()  {
    return this.eventSubject$.asObservable();
  }
  get events$() {
    return this.eventSubject$;
  }
  set event(eventObj: any) {
    this.eventSubject$.next(eventObj);
  }
}
