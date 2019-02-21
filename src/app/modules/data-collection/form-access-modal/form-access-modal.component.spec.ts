import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAccessModalComponent } from './form-access-modal.component';

describe('FormAccessModalComponent', () => {
  let component: FormAccessModalComponent;
  let fixture: ComponentFixture<FormAccessModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAccessModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAccessModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
