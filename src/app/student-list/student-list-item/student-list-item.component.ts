import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'student-list-item',
  templateUrl: 'student-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class StudentListItemComponent {

  @Input()
  student: Student | undefined;

}
