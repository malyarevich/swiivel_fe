import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuitionContractSidebarComponent } from './tuition-contract-sidebar.component';

describe('TuitionContractSidebarComponent', () => {
  let component: TuitionContractSidebarComponent;
  let fixture: ComponentFixture<TuitionContractSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuitionContractSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuitionContractSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
