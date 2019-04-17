import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VFormStatisticSubmissionsComponent } from './v-form-statistic-submissions.component';

describe('VFormStatisticSubmissionsComponent', () => {
  let component: VFormStatisticSubmissionsComponent;
  let fixture: ComponentFixture<VFormStatisticSubmissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VFormStatisticSubmissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VFormStatisticSubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
