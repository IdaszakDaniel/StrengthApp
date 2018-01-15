import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiftChartComponent } from './lift-chart.component';

describe('LiftChartComponent', () => {
  let component: LiftChartComponent;
  let fixture: ComponentFixture<LiftChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiftChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiftChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
