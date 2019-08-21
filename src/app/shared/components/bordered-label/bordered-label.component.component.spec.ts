import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderedLabelComponent } from './bordered-label.component';

describe('BordredLabelComponent', () => {
  let component: BorderedLabelComponent;
  let fixture: ComponentFixture<BorderedLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorderedLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderedLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
