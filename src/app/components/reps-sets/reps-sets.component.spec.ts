import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepsSetsComponent } from './reps-sets.component';

describe('RepsSetsComponent', () => {
  let component: RepsSetsComponent;
  let fixture: ComponentFixture<RepsSetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepsSetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepsSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
