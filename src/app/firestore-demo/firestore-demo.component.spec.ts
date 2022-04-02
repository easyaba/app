import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirestoreDemoComponent } from './firestore-demo.component';

describe('FirestoreDemoComponent', () => {
  let component: FirestoreDemoComponent;
  let fixture: ComponentFixture<FirestoreDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirestoreDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirestoreDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
