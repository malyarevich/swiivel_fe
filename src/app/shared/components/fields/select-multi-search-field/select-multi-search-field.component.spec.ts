import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMultiSearchFieldComponent } from './select-multi-search.component';

describe('SelectMultiSearchComponent', () => {
  let component: SelectMultiSearchFieldComponent;
  let fixture: ComponentFixture<SelectMultiSearchFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectMultiSearchFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMultiSearchFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
