import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { CheckboxSettingComponent } from './checkbox-setting/checkbox-setting.component';
import { DateSettingComponent } from './date-setting/date-setting.component';
import { DropdownSettingComponent } from './dropdown-setting/dropdown-setting.component';
import { EmailSettingComponent } from './email-setting/email-setting.component';
import { GroupSettingsComponent } from './group-settings/group-settings.component';
import { LongtextSettingComponent } from './longtext-setting/longtext-setting.component';
import { NumberSettingComponent } from './number-setting/number-setting.component';
import { PhoneSettingComponent } from './phone-setting/phone-setting.component';
import { SectionSettingsComponent } from './section-settings/section-settings.component';
import { TextSettingComponent } from './text-setting/text-setting.component';

const components = [
  { type: 101, component: TextSettingComponent, title: 'Short Text Field Settings' },
  { type: 102, component: LongtextSettingComponent, title: 'Long Text Field Settings' },
  { type: 103, component: NumberSettingComponent, title: 'Number Field Settings' },
  { type: 104, component: DropdownSettingComponent, title: 'Dropdown Settings' },
  { type: 105, component: DropdownSettingComponent, title: 'Dropdown Settings' },
  { type: 106, component: DateSettingComponent, title: 'English Date Settings' },
  { type: 107, component: CheckboxSettingComponent, title: 'Checkbox Field Settings' },
  { type: 108, component: EmailSettingComponent, title: 'Email Settings' },
  { type: 109, component: PhoneSettingComponent, title: 'Phone Number Settings' },
  { type: 110, component: DateSettingComponent, title: 'Hebrew Date Settings' },
  { type: 113, component: GroupSettingsComponent, title: 'Settings' },
  { type: 114, component: SectionSettingsComponent, title: 'Settings' },
];

@Component({
  selector: 'sw-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, AfterViewInit, OnDestroy {
  component: ComponentRef<any>;
  type: number;
  title: string;
  _field: any;
  _form: FormGroup;

  @Input()
  set field(f: any) {
    if (f) {
      this._form = f;
      this.initSettings(this._form);
    }
  }
  @ViewChild('container', { read: ViewContainerRef, static: false }) container;

  constructor(
    private resolver: ComponentFactoryResolver,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    if (this._form) {
      this.initSettings(this._form);
    }
  }

  getClass(t: string): string {
    let res: string;
    switch (t) {
      case 'settings':
        if (this.type === 113) { res = 'col-8'; }
        else { res = 'col-4'; }
        break;
      case 'logic':
        if (this.type === 113) { res = 'col-4'; }
        else { res = 'col-8'; }
        break;
    }
    return res;
  }

  private initSettings(f: FormGroup): void {
    const c = components.find(c => c.type === f.value.type);
    if (c) {
      this.type = c.type;
      this.title = c.title;
     
      const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory<any>(c.component);
      if (this.container) {
        this.component = this.container.createComponent(factory);
        this.component.instance.settings = f.get('options').value;
        this.component.instance.fieldSettings.subscribe(v => {
          this.updateField(v);
        });
        if (this.component.instance.setChildren) {
          this.component.instance.setChildren.subscribe(value => {
            this.setChildren(f.get('fields'), value, false);
            // f.updateValueAndValidity();
            // console.log(f.get('fields').value);
            // this.setChildren((this._form.get('fields') as FormArray).controls, value);
          });
        }
        this.cdr.detectChanges();
      }
    }
  }

  setChildren(fields, value, recursive?: boolean) {
    let formArray = fields as FormArray;
    for (let field of formArray.controls) {
      let control = field.get(['options', value.key]) as FormControl;
      if (!control) {
        (field.get('options') as FormGroup).addControl(value.key, new FormControl(value.value));
      } else {
        control.setValue(value.value, {emitEvent: false, });
      }
      if (recursive && field.get('fields')) {
        this.setChildren(field.get('fields'), value, true);
      }
    }
  }

  updateField(v) {
    let optionsControl = this._form.get('options') as FormGroup;
    for (const key of Object.keys(v)) {
      let control = optionsControl.get(key);
      if (!control) {
        optionsControl.registerControl(key, new FormControl(v[key]));
      }
    }
    this._form.get('options').patchValue(v)
  }

  ngOnDestroy(): void {
    if (this.component) { this.component.destroy(); }
  }

}
