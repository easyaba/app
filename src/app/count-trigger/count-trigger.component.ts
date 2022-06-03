import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  counter = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  count() {
    this.counter.emit();
  }

}
