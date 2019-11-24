import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactory, ComponentFactoryResolver,
  ComponentRef, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
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
  // { type: 106, component: DateSettingComponent, title: 'English Date Settings' },
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

  @Input()
  set field(f: any) {
    if (f) {
      this._field = f;
      this.initSettings(this._field);
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
    if (this._field) {
      this.initSettings(this._field);
    }
  }

  getClass(t: string): string {
    let res: string;
    switch (t) {
      case 'settings':
        if (this.type === 113) { res = 'col-8'; } else { res = 'col-4'; }
        break;
      case 'logic':
        if (this.type === 113) { res = 'col-4'; } else { res = 'col-8'; }
        break;
    }
    return res;
  }

  private initSettings(f: any): void {
    const c = components.find(comp => comp.type === f.type);
    if (c) {
      this.type = c.type;
      this.title = c.title;
      if (c.type === 107) {
        console.log('Field group', f);
      }
      const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(c.component);
      if (this.container) {
        this.component = this.container.createComponent(factory);
        this.component.instance.settings = f;
        this.component.instance.fieldSettings.subscribe(v => {
          this.updateField(v);
        });
        this.cdr.detectChanges();
      }
    }
  }

  updateField(v) {
    Object.assign(this._field, v);
    console.log('object assign', Object.assign(this._field, v));
  }

  ngOnDestroy(): void {
    if (this.component) { this.component.destroy(); }
  }

}
