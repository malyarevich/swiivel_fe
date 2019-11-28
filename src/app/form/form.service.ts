import { Injectable } from '@angular/core';

import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { ApiService } from '@app/core/api.service';
import { cloneDeep, flatMap, flattenDeep, get, isArrayLike, isPlainObject, isString, set, unset, values, flatMapDeep } from 'lodash';
import { BehaviorSubject, Subject, from, throwError, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as SymbolTree from 'symbol-tree';

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
const flattenLo = function(field) {
  return [field, flatMapDeep(field.fields, flattenLo)];
}
function flattenrec(xs) {
  return xs.reduce((acc, x) => {
    acc = acc.concat(x);
    if (x.type >= 113) {
      acc = acc.concat(flattenrec(x.fields));
      // x.fields = [];
    }
    return acc;
  }, []);
}
const mapField = (field, mappers = []) => {
  if (field.fields) {
    field.fields = field.fields.map(cfield => mapField(cfield, mappers));
  }
  const found = mappers.find(ffield => {
    if (field.mapped) {
      return field.type === ffield.type && field.mapped === ffield.mapped;
    }
    return false;
  });
  if (found) {
    field.textType = found.name;
    if (!field.options || Array.isArray(field.options)) {
      field.options = found.options;
    }

    return field;
  } else {
    return field;
  }
}
const joinForm = (field, path = [], formFields = []) => {
  let result;
  if (field.fields) {
    path.push(field.name);
    field.fields = field.fields.map(cfield => joinForm(cfield, path, formFields));
  }
  const found = formFields.find(ffield => {
    if (field.mapped && field.prefix) {
      return field.name === ffield.name && field.type === ffield.type && field.mapped === ffield.mapped && field.prefix === ffield.prefix;
    } else if (field.mapped) {
      return field.name === ffield.name && field.type === ffield.type && field.mapped === ffield.mapped;
    } else {
      return field.name === ffield.name && field.type === ffield.type;
    }
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
  _form: BehaviorSubject<FormGroup> = new BehaviorSubject<FormGroup>(null);
  private isFormHasIdSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  formsById = {};
  public fieldTypes = {
    schema: [],
    mapped: []
  };
  public stage$ = new BehaviorSubject(0);
  public dropLists = new Set();
  public dropLists$ = new BehaviorSubject(this.dropLists);
  constructor(private fb: FormBuilder, private api: ApiService) {
    this.loadMappedFields();
    this.loadFieldsSchema();
  }

  loadFieldsSchema() {
    this.api.getCustomFields().subscribe((fields) => {
      this.fieldTypes.schema = fields;
    })
  }

  loadMappedFields() {
    this.api.getMappedFields().subscribe((mapped) => {
      this.fieldTypes.mapped = mapped;
    });
  }

  getSidebarFields() {
    this.api.getSidebarFields().subscribe((fields) => {
      const formFields = (this.form && this.form.get('fields')) ? flatten(this.form.get('fields').value) : [];
      this.sidebar = fields.map(field => joinForm(field, [], formFields)).slice();
    });
  }

  loadForm(formId?: string) {
    this.form = null;
    if (formId !== 'new') {
      const getFormTemplate = this.api.getFormTemplate(formId);
      getFormTemplate.subscribe(data => {
        if (data) {
          this.stage$.next(1);
          this.form = this.initForm(data);
          this.getSidebarFields();
        }
      });
      return getFormTemplate;
    } else {
      this.form = this.initForm();
    }
  }

  moveField(event: CdkDragDrop<any>) {
    console.groupCollapsed(`Moving field ${event.item.data.name}`);

    console.groupEnd();
  }


  remove(field) {
    this.events$.next({ action: 'removeit', field });
  }

  removeField(control: AbstractControl) {
    let controlName = control.get('name').value;
    if (control.parent instanceof FormArray) {
      let parent = control.parent as FormArray;
      let index = 0;
      for (const child of parent.controls) {
        if (child.get('name').value === controlName) {
          parent.removeAt(index);
          break;
        }
        index++;
      }
    } else {
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
  getListLength() {
    const allFields = flatMapDeep(this.form.get('fields').value, flattenLo);
    // const allFields = flattenDeep(this.form.get('fields').value);
    return allFields.filter(field => field.type >= 113).length;
  }
  addDropListId(id) {
    this.dropLists.add(id);
    this.dropLists$.next(this.dropLists);
    return this.dropLists;
  }
  getListsIds(ids = [], parent?) {
    if (!parent) parent = this.form;
    let fields = parent.get('fields')
    if (fields) {
      if (parent !== this.form) {
        let thisId = [...this.getParentPaths(parent), parent.get('name').value, parent.get('type').value].join('');
        ids.push(thisId);
      }
      (fields as FormArray).controls.slice().map(control => this.getListsIds(ids, control));
    }
    return ids;
  }
  addFieldFromSBToFormGroup(field: object, parent: FormGroup) {
    field = cloneDeep(field);
    field['isExpanded'] = true;
    (parent.get('fields') as FormArray).push(this.initForm(field));
    return parent;
  }

  addWrapper(forField?) {
    let wrapper = this.fb.group({
      type: 114,
      name: 'New section',
      isExpanded: true,
      path: this.fb.control(['New section']),
      pathId: 'New section114',
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
      if (forField) {
        this.addFieldArray('fields', [forField], wrapper);
      } else {
        this.addFieldArray('fields', [], wrapper);
      }
      fieldsArray.push(wrapper);
      this.form.addControl('fields', fieldsArray);
    } else {
      fields.push(wrapper);
    }
    if (forField) {
      return this.findControl(forField['path'], this.form)
    } else {
      return this.form.get('fields');
    }
  }
  addFieldFromSBToFormArray(field: object, fa: FormArray) {
    field = cloneDeep(field);
    field['isExpanded'] = true;
    if (fa.parent) {
      (fa.parent.get('fields') as FormArray).push(this.initForm(field));
    } else {
      if (this.form.get('fields') && field['type'] === 114) {
        (this.form.get('fields') as FormArray).push(this.initForm(field));
      } else {
        fa = this.addWrapper(field);
      }

    }
    // parent.push(this.initForm(field));
    return fa;
  }
  addFieldFromSB(field: object, index?: number): FormGroup {
    field = cloneDeep(field);
    field['isExpanded'] = true;

    let parent, parentPath, fieldName, fieldValue;
    fieldName = field['name'] as string;
    fieldValue = field;
    parentPath = field['path'].slice(0, -1);

    let fields = this.form.get('fields') as FormArray;
    if (fields) {
      parent = fields.at(0);
      if (parentPath.length > 0) {
        parent = this.findControl(parentPath, parent);
        if (!parent) {
          parent = this.addPathToParent(parentPath, fields.at(0));
        }
      }
    } else {
      this.addWrapper();
      let fields = this.form.get('fields') as FormArray;
      parent = this.addPathToParent(parentPath, fields.at(0))
    }
    if (index !== undefined || index !== null) {
      parent.get('fields').insert(index, this.initForm(field));
    } else {
      parent.get('fields').push(this.initForm(field));
    }
    return parent;
  }

  addPathToParent(path, parent, fields?: any[]) {
    path = path.slice();
    let tmpSidebar: any[] = cloneDeep(this.sidebarSubject$.getValue());
    if (fields) { tmpSidebar = fields; }
    if (path.length <= 0) { return parent; }
    let control = parent.get(path);
    if (!control) {
      let children = parent.get('fields') as FormArray;
      if (children && children.length) {
        for (const [index, child] of children.controls.entries()) {
          if (child.get('path') && child.get('path').value[0] === path[0]) {
            let fields = tmpSidebar.find(i => (i.name === path[0])).fields;
            path.splice(0, 1);
            if (path.length === 0) {
              return child;
            } else {
              control = this.addPathToParent(path, child, fields);
            }
          } else if (index === children.controls.length - 1) {
            if (path.length > 0) {
              let wrap = cloneDeep(tmpSidebar.find(i => (i.name === path[0])));
              wrap.fields = [];
              wrap.path = [path[0]];
              wrap.isExpanded = true;
              children.push(this.initForm(wrap));
              control = this.addPathToParent(path, parent, tmpSidebar);
            }
          }
        }
      } else {
        if (path.length > 0) {
          let wrap = cloneDeep(tmpSidebar.find(i => (i.name === path[0])));
          wrap.fields = [];
          wrap.path = [path[0]];
          wrap.isExpanded = true;
          children.push(this.initForm(wrap));
          control = this.addPathToParent(path, parent, tmpSidebar);
        } else {
          control = this.addPathToParent(path, parent);
        }
      }
    }
    return control;
  }

  removeFieldFromSB(field) {
    field = cloneDeep(field);
    const control = this.findControl(field['path']);
    if (control) {
      this.removeField(control);
    }
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
    let field = this.fb.control(fieldValue);
    (parent as FormGroup).addControl(fieldName, field);
    return parent.get(fieldName);
  }

  addFields(fields: any[], parent: FormGroup) {
    let fieldsArray = this.fb.array([]);
    for (const field of fields) {
      let fieldFields;
      if ('fields' in Object.keys(field)) {
        if (Array.isArray(field.fields)) {
          fieldFields = cloneDeep(field.fields);
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
    const form = this.fb.group({});
    if (data) {
      let options: object = {
        size: 3,
        required: false,
        unique: false,
        hideLabel: false,
        readonly: false
      };
      for (const key of Object.keys(data)) {
        if (Array.isArray(data[key])) {
          if (key === 'fields') {
            this.addFieldArray(key, data[key], form);
          } else {
            form.addControl(key, this.fb.array([]));
            data[key].forEach((item) => {
              if (typeof item !== 'string') {
                (form.get(key) as FormArray).push(this.initForm(item));
              } else {
                (form.get(key) as FormArray).push(this.fb.control(item));
              }
            });
          }
        } else if (isPlainObject(data[key])) {
          form.addControl(key, this.initForm(data[key]));
        } else {
          this.addField(key, data[key], form);
        }
      }
      let schema = this.fieldTypes.schema.find((field) => field.type == data.type);
      let mapped = this.fieldTypes.mapped.find((mapped) => mapped.type == data.type && mapped.mapped === data.mapped);
      if (schema && schema.name) {
        this.addField('textType', schema.name, form);
      }
      if (schema && schema.options && !Array.isArray(schema.options)) {
        options = schema.options;
      }
      if (mapped && mapped.options) {
        options = { ...options, ...mapped.options };
      }
      if (data.path && !data.options) {
        this.addField('isExpanded', false, form);
        this.addFieldGroup('options', options, form);
      }
      if (data.path && Array.isArray(data.options) && data.options.length === 0) {
        this.addField('isExpanded', false, form);
        form.removeControl('options');
        this.addFieldGroup('options', options, form);
      }
      form.patchValue(data);
    } else {
      form.addControl('name', this.fb.control(null, [Validators.required]));
      form.addControl('type', this.fb.control('registration', [Validators.required]))
    }
    return form;
  }

  saveForm() {
    console.groupCollapsed('Saving form');
    this.form.updateValueAndValidity();
    if (this.form.valid) {
      const data = this.form.value;
      if (this.form.get('_id')) {
        return this.api.updateFormTemplate(data._id, data).pipe(
          tap(res => {
            console.log('RESPONSE EDIT  FORM', res);
            console.groupEnd();
          })
        );
      } else {
        return this.api.saveNewForm(data).pipe(
          tap(res => {
            console.log('RESPONSE NEW  FORM', res);
            console.groupEnd();
          })
        );
      }


    } else {
      console.error(this.form.errors);
      console.groupEnd();
      return throwError(this.form.errors);
    }

  }

  get form(): FormGroup {
    return this._form.getValue();
  }
  
  set form(form: FormGroup) {
    this._form.next(form);
  }

  get form$() {
    return this._form.asObservable();
  }


  set isFormHasId(flag: boolean) {
    this.isFormHasIdSubject$.next(flag);
  }

  get isFormHasId(): boolean {
    return this.isFormHasIdSubject$.getValue();
  }

  get isFormHasId$(): Observable<boolean> {
    return this.isFormHasIdSubject$.asObservable();
  }

  get isFormHasIdSubject(): BehaviorSubject<boolean> {
    return this.isFormHasIdSubject$;
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

  get eventO$() {
    return this.eventSubject$.asObservable();
  }
  get events$() {
    return this.eventSubject$;
  }
  set event(eventObj: any) {
    this.eventSubject$.next(eventObj);
  }
}
