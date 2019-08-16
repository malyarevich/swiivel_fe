import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInfoGroupComponent } from './general-info-group.component';

describe('GeneralInfoGroupComponent', () => {
  let component: GeneralInfoGroupComponent;
  let fixture: ComponentFixture<GeneralInfoGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralInfoGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralInfoGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
