import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipQuestionComponent } from './tip-question.component';

describe('TipQuestionComponent', () => {
  let component: TipQuestionComponent;
  let fixture: ComponentFixture<TipQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
