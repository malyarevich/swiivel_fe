import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGeneralBasicInfoComponent } from './form-general-basic-info.component';

describe('FormGeneralBasicInfoComponent', () => {
  let component: FormGeneralBasicInfoComponent;
  let fixture: ComponentFixture<FormGeneralBasicInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGeneralBasicInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGeneralBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
