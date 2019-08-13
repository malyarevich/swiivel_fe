import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuitionContractContentComponent } from './tuition-contract-content.component';

describe('TuitionContractContentComponent', () => {
  let component: TuitionContractContentComponent;
  let fixture: ComponentFixture<TuitionContractContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuitionContractContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuitionContractContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
