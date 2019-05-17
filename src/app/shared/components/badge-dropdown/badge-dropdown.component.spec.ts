import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeDropdownComponent } from './badge-dropdown.component';

describe('BadgeDropdownComponent', () => {
  let component: BadgeDropdownComponent;
  let fixture: ComponentFixture<BadgeDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
