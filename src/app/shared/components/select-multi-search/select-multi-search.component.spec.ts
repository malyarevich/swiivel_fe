import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMultiSearchComponent } from './select-multi-search.component';

describe('SelectMultiSearchComponent', () => {
  let component: SelectMultiSearchComponent;
  let fixture: ComponentFixture<SelectMultiSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectMultiSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMultiSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
