import { ArrayDataSource } from '@angular/cdk/collections';
import { Component, Input, OnInit } from '@angular/core';
import {
  AggregatedBehaviour,
  BehaviourEvent,
} from 'src/app/model/behavior.model';

@Component({
  selector: 'app-behaviour-list',
  templateUrl: './behaviour-list.component.html',
})
export class BehaviourListComponent implements OnInit {
  @Input()
  events!: BehaviourEvent[];
  aggregatedEvents? : AggregatedBehaviour[]
  constructor() {}

  ngOnInit() {
    let nameAggregatedMap: Map<String, AggregatedBehaviour> = new Map();
    this.events.forEach((event) => {
      if (!nameAggregatedMap.has(event.behaviourName)) {
        nameAggregatedMap.set(event.behaviourName, this.event2AggregatedEvent(event))
      } else {
        nameAggregatedMap.set(event.behaviourName, this.addEventToAggregatedBehaviour(nameAggregatedMap.get(event.behaviourName)!, event))
      }
    });
    this.aggregatedEvents = Array.from(nameAggregatedMap.values())

  }

  addEventToAggregatedBehaviour(
    aggr: AggregatedBehaviour,
    event: BehaviourEvent
  ): AggregatedBehaviour {
    let result = aggr;
    switch (aggr.type) {
      case 'COUNTER':
        result.count!++;
        break;
      case 'TIMER':
        result.duration! += event.duration!;
        break;
      case 'FULL_INTERVAL':
      case 'PART_INTERVAL':
        result.countOfOKInterval! += this.getCountOfInterval(
          true,
          event.interval!
        );
        result.countOfNOKInterval! += this.getCountOfInterval(
          false,
          event.interval!
        );
        result.percentageOk = this.getOkPercentage(
          result.countOfOKInterval!,
          result.countOfNOKInterval!
        );
        break;
    }
    return result;
  }

  event2AggregatedEvent(event: BehaviourEvent): AggregatedBehaviour {
    let result: AggregatedBehaviour = {
      behaviourName: event.behaviourName,
      behaviourId: event.behaviourId,
      count: 1,
      type: event.type,
    };
    switch (event.type) {
      case 'TIMER':
        result.duration! = event.duration!;
        break;
      case 'FULL_INTERVAL':
      case 'PART_INTERVAL':
        result.countOfOKInterval! = this.getCountOfInterval(
          true,
          event.interval!
        );
        result.countOfNOKInterval! = this.getCountOfInterval(
          false,
          event.interval!
        );
        result.percentageOk = this.getOkPercentage(
          result.countOfOKInterval,
          result.countOfNOKInterval
        );
        break;
    }

    return result;
  }

  getCountOfInterval(ok: boolean, intervals: boolean[]): number {
    let okCnt = 0;
    let nokCnt = 0;
    intervals.forEach((val) => {
      if (val) {
        okCnt++;
      } else {
        nokCnt++;
      }
    });
    if (ok) return okCnt;
    return nokCnt;
  }

  getOkPercentage(okCnt: number, nokCnt: number): number {
    return (okCnt / (okCnt + nokCnt) * 100)
  }
}
