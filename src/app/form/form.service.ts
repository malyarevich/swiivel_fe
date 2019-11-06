import { Injectable } from '@angular/core';

import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '@app/core/api.service';
import { cloneDeep, flatMap, get, isArrayLike, isPlainObject, set, unset, values } from 'lodash';
import { BehaviorSubject, Subject } from 'rxjs';

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

@Injectable()
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
      const formFields = this.form ? flatten(this.form.fields) : [];
      this.sidebarSubject$.next(fields.map(field => joinForm(field, [], formFields)).slice());
    });
    this.sidebarSubject$.subscribe((fields) => {
      console.log(fields);
    });
  }

  loadForm(formId?: string) {
    if (formId !== 'new') {
      this.api.getFormTemplate(formId).subscribe(data => {
        console.log('GET data by ID', data)
        if (data) {
          this.form = data;
        }
      });
    } else {
      this.form = { fields: [], type: 'registration', name: null };
    }
  }

  addWrapper(section?, field?) {
    const form = cloneDeep(this.form);
    if (!section) {
      section = {
        type: 114,
        name: 'New section',
        isActive: true,
        fields: [],
        path: ['New section'],
        pathId: 'New section114'
      };
    }
    if (field) { section.fields = [field]; }
    const formGroup = this.createField(section);
    if (!field) { formGroup.addControl('fields', this.fb.group({})); }
    this.form.form = this.fb.group({ [section.name]: formGroup });
    this.form.workspace = [section];
    return section;
  }

  parentControlPath(paths) {
    return flatMap(paths.slice(0, -1), (path => [path, 'fields']));
  }

  fieldControlPath(paths) {
    return flatMap(paths, (path => [path, 'fields'])).slice(0, -1);
  }

  getFieldSpace(field) {
    if (!field || !field.path) { return null; }
    const spacePath = this.getFieldSpacePath(field);
    if (spacePath === null) { return null; }
    const space = get(this.form.workspace, spacePath);
    return space;
  }
  removeFieldSpace(field) {
    const parentPath = field.path.slice(0, -1).reduce((paths, path, idx) => {
      if (paths === null) { return null; }
      let searchArray = get(this.form.workspace, [...paths], false);
      if (searchArray === false && idx === 0) {
        searchArray = this.form.workspace;
      }
      if (searchArray) {
        const foundIdx = searchArray.findIndex(searchField => searchField.name === path);
        if (foundIdx !== -1) {
          paths.push(foundIdx, 'fields');
          return paths;
        } else { return null; }
      } else {
        debugger;
      }
    }, []);
    if (parentPath === null) { return null; }
    let parent = get(this.form.workspace, parentPath);
    unset(this.form.workspace, [...parentPath, field.name]);
    parent = set(this.form.workspace, parentPath, parent.filter(pp => !(pp.name === field.name && pp.type === field.type)));
    return parent;
  }
  getFieldForm(field) {
    const form = this.form.form;
    if (Object.keys(form.controls).length === 0) { return 0; }
    if (field._id) {

    } else {
      if (field.path) {
        const parentPath = this.parentControlPath(field.path);
        let control = form.get([...parentPath, field.name]);
        if (!control) {
          for (const key of Object.keys(form.controls)) {
            control = form.get([key, 'fields', ...parentPath, field.name]);
            if (control) {
              field.path.unshift(key);
              break;
            }
          }
        }
        return control;
      } else {
        return null;
      }
    }
  }
  getFieldFormParent(field) {
    const form = this.form.get('form');
    if (!form || !form.controls || Object.keys(form.controls).length === 0) { return 0; }
    if (field._id) {

    } else {
      if (field.path) {
        const parentPath = this.parentControlPath(field.path);
        let parent = form.get(parentPath);
        if (!parent) {
          for (const key of Object.keys(form.controls)) {
            parent = form.get([key, 'fields', ...parentPath]);
            if (parent) {
              field.path.unshift(key);
              break;
            }
          }
        }
        return parent;
      } else {
        return null;
      }
    }
  }
  moveField(event: CdkDragDrop<any>) {
    console.groupCollapsed(`Moving field ${event.item.data.name}`);
    if (event.container.id === event.previousContainer.id) {
      const rootNames = this.form.workspace.map((root: any) => root.name);
      const path = event.item.data.path.slice();
      if (!rootNames.includes(path[0])) {
        const wrapper = this.form.workspace.find((section) => section.fields.find((s) => s.name === path[0]));
        if (wrapper) { event.item.data.path.unshift(wrapper.name); }
      }
      const spaceParent = this.getFieldSpaceParent(event.item.data);
      const space = this.getFieldSpace(event.item.data);
      if (spaceParent && space) {
        const position = spaceParent.indexOf(space);
        if (position !== -1) {
          spaceParent.splice(event.currentIndex, 0, spaceParent.splice(position, 1)[0]);
          this.events$.next({ action: 'update' });
        }
      }
    } else if (event.container.id !== event.previousContainer.id) {
      const rootNames = this.form.workspace.map((root: any) => root.name);
      const path = event.item.data.path.slice();
      if (!rootNames.includes(path[0])) {
        const wrapper = this.form.workspace.find((section) => section.fields.find((s) => s.name === path[0]));
        if (wrapper) { event.item.data.path.unshift(wrapper.name); }
      }
      const spaceParent = this.getFieldSpaceParent(event.item.data);
      const formParent = this.getFieldFormParent(event.item.data);
      const fieldForm = formParent.get(event.item.data.name);
      const target = this.getFieldSpace(event.container.data);
      const targetForm = this.getFieldForm(event.container.data);
      const space = this.getFieldSpace(event.item.data);
      console.log(cloneDeep(formParent));
      console.log(cloneDeep(fieldForm));
      console.log(cloneDeep(targetForm));
      if (spaceParent && space && target && fieldForm && targetForm) {
        const position = spaceParent.indexOf(space);
        if (position !== -1) {
          // transferArrayItem(spaceParent, target.fields, position, event.currentIndex);
          const moving = spaceParent.splice(position, 1)[0];
          moving.path = [...event.container.data.path, moving.name];
          moving.pathId = moving.path.join('') + moving.type;
          target.fields.splice(event.currentIndex, 0, moving);
          formParent.removeControl(moving.name);
          fieldForm.patchValue({
            path: moving.path,
            pathId: moving.pathId
          });
          targetForm.get('fields').addControl(moving.name, fieldForm);
          fieldForm.setParent(targetForm.get('fields'));
          console.log(cloneDeep(formParent));
          console.log(cloneDeep(fieldForm));
          console.log(cloneDeep(targetForm));
          this.events$.next({ action: 'update' });
        }
      }
    }
    console.groupEnd();
  }
  prependPath(field, path) {
    field.path.splice(0, 0, path);
    field.pathId = path + field.pathId;
    if (Array.isArray(field.fields)) { field.fields.forEach(field => this.prependPath(field, path)); }
    return field;
  }
  addField(field, ancestors?, only?) {
    if (!field || !field.name) { return null; }
    if (Array.isArray(ancestors) && ancestors.length === 0) { ancestors = null; }
    console.groupCollapsed(`Adding field ${field.name}`);
    const form = this.form.form; // this.fb.array([]) as FormArray;
    const formParent = this.getFieldFormParent(field);
    if (formParent === 0 && field.type !== 114) {
      const wrapper = this.addWrapper();
      this.prependPath(field, wrapper.name);
      console.log(cloneDeep(field));
      this.addField(field, ancestors, only);
    } else if (!!formParent) {
      formParent.addControl(field.name, this.createField(field));
      let spaceParent = this.getFieldSpaceParent(field);
      if (spaceParent) {
        if (!spaceParent.find(a => a.name === field.name && a.type === field.type)) {
          if (only) {
            spaceParent.push({ ...field, fields: [] });
          } else {
            spaceParent.push(field);
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
              const preparent = this.getFieldSpaceParent(prev);
              preparent.find(pp => pp.name === prev.name && pp.type === prev.type).fields.push({ ...ancestor, fields: [] });
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
        } else { debugger; }
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

  getFieldSpaceParentPath(field) {
    const parentPath = field.path.slice(0, -1).reduce((paths, path, idx) => {
      if (paths === null) { return null; }
      let searchArray = get(this.form.workspace, [...paths], false);
      if (searchArray === false && idx === 0) {
        searchArray = this.form.workspace;
      }
      if (searchArray) {
        const foundIdx = searchArray.findIndex(searchField => searchField.name === path);
        if (foundIdx !== -1) {
          paths.push(foundIdx, 'fields');
          return paths;
        } else { return null; }
      } else {
        debugger;
      }
    }, []);
    return parentPath;
  }

  getFieldSpacePath(field) {
    const fieldPath = field.path.reduce((paths, path, idx) => {
      if (paths === null) { return null; }
      let searchArray = get(this.form.workspace, [...paths], false);
      if (searchArray === false && idx === 0) {
        searchArray = this.form.workspace;
      }
      if (searchArray) {
        const foundIdx = searchArray.findIndex(searchField => searchField.name === path);
        if (foundIdx !== -1) {
          paths.push(foundIdx, 'fields');
          return paths;
        } else { return null; }
      } else {
        debugger;
      }
    }, []);
    if (fieldPath) { fieldPath.pop(); }
    return fieldPath;
  }

  getFieldSpaceParent(field) {
    if (!field || !field.path) { return null; }
    const parentPath = this.getFieldSpaceParentPath(field);
    if (parentPath === null) { return null; }
    const parent = get(this.form.workspace, parentPath);
    return parent;
  }

  removeField(field) {
    console.groupCollapsed(`Removing field`);
    console.dir(cloneDeep(field));

    const formParent = this.getFieldFormParent(field);
    const spaceParent = this.removeFieldSpace(field);
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
    if (field.fields && field.fields.length > 0) {
      const fields = this.fb.group({});
      form.addControl('fields', fields);
      field.fields.forEach(child => fields.addControl(child.name, this.createField(child)));
    }
    return form;
  }

  initForm(fields) {
    console.groupCollapsed(`Creating fields`);
    console.log(fields);
    const form = this.fb.group({});
    if (!isArrayLike(fields)) { fields = []; }
    for (const field of fields) {
      field.form = this.createField(field);
      form.addControl(field.name, field.form);
    }
    console.groupEnd();
    return form;
  }
  // initForm(formData) {
  //   console.groupCollapsed(`Creating form`);
  //   console.log(formData);
  //   let form = this.fb.group({
  //     fields: this.createField(formData.fields),
  //     workspace: [],
  //     packetIntroduction: this.fb.group({
  //       ...formData.packetIntroduction
  //     })
  //   })//.array(fields.map(this.createField));
  //   // if (!isArrayLike(formData.fields)) { formData.fields = []; }
  //   // console.log(formData.fields)
  //   // for (let field of formData.fields) {
  //   //   field.form = this.createField(field)
  //   //   form.addControl(field.name, field.form);
  //   // }

  //   console.groupEnd();
  //   return form;
  // }

  get form() {
    return this._form.getValue();
  }

  get form$() {
    return this._form.asObservable();
  }
  set form(_form) {
    _form = cloneDeep(_form);
    let fields = cloneDeep(_form.fields);
    delete _form.fields;
    const form = this.fb.group({
      workspace: [cloneDeep(fields)],
      form: [this.initForm(fields)]
    });
    for (const field in _form) {
      if (isPlainObject(_form[field])) {
        form.addControl(field.toString(), this.fb.group(_form[field]));
      } else {
        form.addControl(field, this.fb.control(_form[field]));
      }
    }
    if (isPlainObject(fields)) {
      fields = values(fields);
    }

    // form.workspace = cloneDeep(fields);
    // form.form = this.initForm(fields);
    this._form.next(form);
    this.events$.next({ action: 'update' });
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

  get events$() {
    return this.eventSubject$;
  }
  set event(eventObj: any) {
    this.eventSubject$.next(eventObj);
  }

}
