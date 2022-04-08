import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ChildListComponent } from './child-list.component';

describe('ChildListComponent', () => {
  let component: ChildListComponent;
  let fixture: ComponentFixture<ChildListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildListComponent],
      imports: [RouterTestingModule.withRoutes([])],
      // providers: [{ provide: ActivatedRoute, useValue: activatedRouteSpy }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
