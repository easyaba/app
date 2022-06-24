import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, Input, OnInit } from '@angular/core';
import { AggregatedBehaviour } from 'src/app/model/behavior.model';

@Component({
  selector: 'behaviour-list-item',
  templateUrl: './behaviour-list-item.html',
})
export class BehaviourListItemComponent implements OnInit {
  @Input()
  behaviour?: AggregatedBehaviour;
  counter?: AggregatedBehaviour;
  timer?: AggregatedBehaviour;
  fullInterval?: AggregatedBehaviour;
  partInterval?: AggregatedBehaviour;

  constructor() {}

  ngOnInit(): void {
    switch (this.behaviour?.type) {
      case 'COUNTER':
        this.counter = this.behaviour;
        break;
      case 'TIMER':
        this.timer = this.behaviour;
        break;
      case 'FULL_INTERVAL':
        this.fullInterval = this.behaviour;

        break;
      case 'PART_INTERVAL':
        this.partInterval = this.behaviour;
        break;
    }
  }
}
