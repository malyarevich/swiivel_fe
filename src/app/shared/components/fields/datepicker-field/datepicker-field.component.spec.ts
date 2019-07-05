import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapickerFieldComponent } from './datepicker-field.component';

describe('DatapickerFieldComponent', () => {
  let component: DatapickerFieldComponent;
  let fixture: ComponentFixture<DatapickerFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatapickerFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatapickerFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
