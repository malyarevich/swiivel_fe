import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineFormWrapperComponent } from './online-form-wrapper.component';

describe('OnlineFormWrapperComponent', () => {
  let component: OnlineFormWrapperComponent;
  let fixture: ComponentFixture<OnlineFormWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineFormWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineFormWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
