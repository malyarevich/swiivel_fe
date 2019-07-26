import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VEmailSettingsComponent } from './v-email-settings.component';

describe('VEmailSettingsComponent', () => {
  let component: VEmailSettingsComponent;
  let fixture: ComponentFixture<VEmailSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VEmailSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VEmailSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
