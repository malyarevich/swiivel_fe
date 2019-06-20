import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTheadComponent } from './table-thead.component';

describe('TableTheadComponent', () => {
  let component: TableTheadComponent;
  let fixture: ComponentFixture<TableTheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
