import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TimerTriggerComponent } from './timer-trigger.component';

describe('TimerTriggerComponent', () => {
  let component: TimerTriggerComponent;
  let fixture: ComponentFixture<TimerTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimerTriggerComponent],
      imports: [MatIconModule, NoopAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerTriggerComponent);
    component = fixture.componentInstance;
    component.name = 'testname';
    component.abbreviation = 'abr';
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should have correct texts', () => {
    const timerElement: HTMLElement = fixture.nativeElement;
    expect(timerElement.querySelector('[tid="name"]')?.textContent).toBe(
      'testname'
    );
    expect(
      timerElement.querySelector('[tid="abbreviation"]')?.textContent
    ).toBe('abr');
  });

  test('should start timer', async () => {
    fixture.detectChanges(); // ngOnInit()

    fixture.nativeElement.querySelector('.cursor-pointer').click();
    fixture.autoDetectChanges();

    //tick();
    fixture.detectChanges();
    // console.log(`timer text ${timerText()} `);
    expect(timerText()).toBe('00:00.0');
    await new Promise((resolve) => setTimeout(resolve, 150));
    // console.log(`timer text ${timerText()} `);
    expect(timerText()).toBe('00:00.1');
  });

  // Helper function to get the error message element value
  // An *ngIf keeps it out of the DOM until there is an error
  const timerText = () => {
    const el = fixture.nativeElement.querySelector('[tid="timer"]');
    return el ? el.textContent : null;
  };
});
