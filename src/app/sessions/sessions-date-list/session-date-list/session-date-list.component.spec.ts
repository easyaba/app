import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionDateListComponent } from './session-date-list.component';

describe('SessionDateListComponent', () => {
  let component: SessionDateListComponent;
  let fixture: ComponentFixture<SessionDateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionDateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionDateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
