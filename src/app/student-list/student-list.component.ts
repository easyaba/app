import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Student } from '../model/student';
import { StudentDialogComponent } from '../student-dialog/student-dialog.component';
import { StudentService } from '../services/student.service';

@Component({
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {
  list$: Observable<Student[]> | undefined;

  constructor(
    private dialog: MatDialog,
    private studentService: StudentService
  ) {}

  openDialog() {
    const studDialog = this.dialog.open(StudentDialogComponent, {
      data: { name: '', surname: '', age: 3, id: '' },
    });

    studDialog.afterClosed().subscribe((student) => {
      if (student !== undefined) {
        this.studentService.create(student);
      }
    });
  }

  ngOnInit(): void {
    this.list$ = this.studentService.getAll();
  }
}
