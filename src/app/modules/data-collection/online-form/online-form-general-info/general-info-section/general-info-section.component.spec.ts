import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInfoSectionComponent } from './general-info-section.component';

describe('GeneralInfoSectionComponent', () => {
  let component: GeneralInfoSectionComponent;
  let fixture: ComponentFixture<GeneralInfoSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralInfoSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralInfoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
