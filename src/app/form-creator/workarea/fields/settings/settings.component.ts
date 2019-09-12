import { Component, OnInit, Input, ComponentRef, ComponentFactory, ComponentFactoryResolver, ViewChild, ViewContainerRef, AfterViewInit, OnDestroy } from '@angular/core';
import { TextSettingComponent } from './text-setting/text-setting.component';
import { LongtextSettingComponent } from './longtext-setting/longtext-setting.component';
import { NumberSettingComponent } from './number-setting/number-setting.component';
import { DropdownSettingComponent } from './dropdown-setting/dropdown-setting.component';
import { DateSettingComponent } from './date-setting/date-setting.component';
import { CheckboxSettingComponent } from './checkbox-setting/checkbox-setting.component';
import { EmailSettingComponent } from './email-setting/email-setting.component';
import { PhoneSettingComponent } from './phone-setting/phone-setting.component';

const components = [
  { type: 101, component: TextSettingComponent, title: 'Short Text Field Settings' },
  { type: 102, component: LongtextSettingComponent, title: 'Long Text Field Settings' },
  { type: 103, component: NumberSettingComponent, title: 'Number Field Settings' },
  { type: 104, component: DropdownSettingComponent, title: 'Dropdown Settings' },
  { type: 105, component: DropdownSettingComponent, title: 'Dropdown Settings' },
  // { type: 106, component: DateSettingComponent, title: 'English Date Settings' },
  { type: 107, component: CheckboxSettingComponent, title: 'Checkbox Field Settings' },
  { type: 108, component: EmailSettingComponent, title: 'Email Settings' },
  { type: 109, component: PhoneSettingComponent, title: 'Phone Number Settings' },
  { type: 110, component: DateSettingComponent, title: 'Hebrew Date Settings' },
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

  @Input() 
  set field(f: any) {
    this._field = f;
  }
  @ViewChild("container", { read: ViewContainerRef, static: false }) container;

  constructor(
    private resolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    if (this._field) {
      this.initSettings(this._field);
    }
  }

  private initSettings(f: any): void {
    const c = components.find(c => c.type === f.type);
    if (c) {
      this.title = c.title;
      const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(c.component);
      if (this.container) {
        this.component = this.container.createComponent(factory);
        this.component.instance.settings = f;
        this.component.instance.fieldSettings.subscribe(v => {
          this.updateField(v);
        });
      }
    }
  }

  updateField(v) {
    // console.log('fieldSettings', v);
    Object.assign(this._field, v);
    // console.log('Updated Field', this._field);
  }

  ngOnDestroy(): void {
    if (this.component) this.component.destroy();
  }

}
