import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureSidebarComponent } from './signature-sidebar.component';

describe('SignatureSidebarComponent', () => {
  let component: SignatureSidebarComponent;
  let fixture: ComponentFixture<SignatureSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignatureSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignatureSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
