import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullIntervalTriggerComponent } from './full-interval-trigger.component';

describe('FullIntervalTriggerComponent', () => {
  let component: FullIntervalTriggerComponent;
  let fixture: ComponentFixture<FullIntervalTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullIntervalTriggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullIntervalTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
