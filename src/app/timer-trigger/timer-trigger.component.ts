import { trigger, transition, style, animate } from '@angular/animations';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { BehaviorSubject, Observable, timer, map, take, startWith } from 'rxjs';

const TICK_INTERVAL = 100;

@Component({
  selector: 'app-timer-trigger',
  templateUrl: './timer-trigger.component.html',
  styleUrls: ['./timer-trigger.component.scss'],
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate(
          '200ms',
          style({ opacity: 0, transform: 'scale(50%) translateX(50%)' })
        ),
      ]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerTriggerComponent implements OnInit {
  @Input()
  name: string | undefined;

  @Input()
  total: number | undefined;

  @Input()
  abbreviation: string | undefined;

  @Input()
  color: string | undefined;

  @Output()
  timer = new EventEmitter<number>();

  start: number = 0;

  constructor() {}

  timerState$ = new BehaviorSubject<'stopped' | 'running' | 'paused'>(
    'stopped'
  );

  timerRunning = false;

  timer$: Observable<number> | undefined;

  ngOnInit(): void {}

  startTimer() {
    this.start = new Date().getTime();
    this.timerState$?.next('running');

    this.timer$ = timer(0, TICK_INTERVAL).pipe(
      startWith(0),
      // tap((v) => console.log(`Tick ${v}`)),
      map((v) => new Date().getTime() - this.start)
    );
  }

  stopTimer() {
    this.timerState$?.next('stopped');
    this.timer$ &&
      this.timer$
        .pipe(take(1))
        .subscribe((value) =>
          this.timer.emit(new Date().getTime() - this.start)
        );
    this.timer$ = undefined;
  }

  toggleTimer() {
    this.timerRunning = !this.timerRunning;
    if (this.timerRunning) {
      this.startTimer();
    } else {
      this.stopTimer();
    }
    this.timerState$.next(
      this.timerState$.value === 'stopped' ? 'running' : 'stopped'
    );
  }
}
