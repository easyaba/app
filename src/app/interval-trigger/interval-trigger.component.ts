import { coerceStringArray } from '@angular/cdk/coercion';
import { Component, Input, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { interval, Observable, startWith, take } from 'rxjs';

@Component({
  selector: 'app-interval-trigger',
  templateUrl: './interval-trigger.component.html',
  styleUrls: ['./interval-trigger.component.scss'],
})
@UntilDestroy()
export class IntervalTriggerComponent implements OnInit {
  constructor() {}

  running = false;

  progress = 0;

  // Definition if the interval is full interval or partial interval
  @Input()
  fullIntervalType: boolean = true;

  @Input()
  intervalLength = 60;

  @Input()
  intervalCount = 10;

  @Input()
  name: String | undefined;

  @Input()
  abbreviation: string | undefined;

  @Input()
  color: string | undefined;

  currentInterval = 0;
  behaviour: (boolean | undefined)[] = new Array(this.intervalCount);

  total: number = 0;

  ngOnInit(): void {
    this.behaviour = new Array(this.intervalCount)
  }

  startInterval() {
    if (this.running) {
      if (this.currentInterval == this.intervalCount) {
        // do nothing if we reached the last interval
      } else {
        this.behaviour[this.currentInterval] = !this.fullIntervalType;

        this.total = this.behaviour.slice(0,this.currentInterval + 1).filter(x => x == true).length / (this.currentInterval + 1) * 100
      }
    } else {
      console.log("intervalcount " + this.intervalCount + " behavior " + this.behaviour)
      interval(1000)
        .pipe(
          take(this.intervalCount * this.intervalLength)
        )
        .subscribe((t) => {
          let intervalSeconds =
            t + 1 - this.currentInterval * this.intervalLength;
          this.progress = (intervalSeconds / this.intervalLength) * 100;
          if (this.progress >= 100) {
            if (this.behaviour[this.currentInterval] === undefined) {
              this.behaviour[this.currentInterval] = this.fullIntervalType;

              // recalculate total
              this.total = this.behaviour.slice(0,this.currentInterval + 1).filter(x => x == true).length / (this.currentInterval + 1) * 100
            }
            this.currentInterval++;
          }
        });
      this.running = true;
    }
  }
}
