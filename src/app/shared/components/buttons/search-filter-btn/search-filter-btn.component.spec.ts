import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterBtnComponent } from './search-filter-btn.component';

describe('SearchFilterBtnComponent', () => {
  let component: SearchFilterBtnComponent;
  let fixture: ComponentFixture<SearchFilterBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFilterBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFilterBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
