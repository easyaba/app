import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Behavior } from 'src/app/model/behavior.model';

@Component({
  selector: 'app-behavior-list-item',
  template: ` <div class="p-2">{{ behavior.name }}</div> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BehaviorListItemComponent {
  @Input()
  behavior!: Behavior;

  constructor() {}
}
