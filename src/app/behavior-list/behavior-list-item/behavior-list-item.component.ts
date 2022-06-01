import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Behavior } from 'src/app/model/behavior.model';

@Component({
  selector: 'app-behavior-list-item',
  templateUrl: './behavior-list-item.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BehaviorListItemComponent {
  @Input()
  behavior!: Behavior;

  constructor() { }
}
