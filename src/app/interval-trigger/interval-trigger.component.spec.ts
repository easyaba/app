import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalTriggerComponent } from './interval-trigger.component';

describe('IntervalTriggerComponent', () => {
  let component: IntervalTriggerComponent;
  let fixture: ComponentFixture<IntervalTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervalTriggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
