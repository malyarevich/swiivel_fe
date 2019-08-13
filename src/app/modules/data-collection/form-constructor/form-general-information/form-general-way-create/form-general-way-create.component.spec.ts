import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGeneralWayCreateComponent } from './form-general-way-create.component';

describe('FormGeneralWayCreateComponent', () => {
  let component: FormGeneralWayCreateComponent;
  let fixture: ComponentFixture<FormGeneralWayCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGeneralWayCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGeneralWayCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
