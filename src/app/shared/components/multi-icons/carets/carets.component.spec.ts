import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaretsComponent } from './carets.component';

describe('CaretsComponent', () => {
  let component: CaretsComponent;
  let fixture: ComponentFixture<CaretsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaretsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaretsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
