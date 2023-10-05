import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorListItemComponent } from './behavior-list-item.component';

describe('BehaviorListItemComponent', () => {
  let component: BehaviorListItemComponent;
  let fixture: ComponentFixture<BehaviorListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehaviorListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviorListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
