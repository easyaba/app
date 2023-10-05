import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviourEvent } from '../model/behaviour-event';
import { Type } from '../model/type';

@Component({
  selector: 'app-count-trigger',
  templateUrl: './count-trigger.component.html',
  styleUrls: ['./count-trigger.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountTriggerComponent implements OnInit {

  @Input()
  name: string | undefined;

  @Input()
  total: number | undefined;

  @Input()
  abbreviation: string | undefined;

  @Input()
  color: string | undefined;

  @Output()
  counter = new EventEmitter<BehaviourEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  count() {
    let newCountEvent: BehaviourEvent = {behaviourId: this.name == undefined? "": this.name, behaviourName: this.name == undefined? "": this.name, type: Type.COUNTER, start: new Date()};
    this.counter.emit(newCountEvent);
  }

}
