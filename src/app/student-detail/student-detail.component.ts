import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from '../model/student.model';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogComponent } from '../student-dialog/student-dialog.component';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss'],
})
export class StudentDetailComponent implements OnInit {
  student?: Student;
  today: Date = new Date();
  student$: Observable<Student | undefined> | undefined;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private dialog: MatDialog,
    private studentService: StudentService
  ) {
    this.id = route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.getStudent();
  }

  goBack(): void {
    this.location.back();
  }

  private getStudent(): void {
    if (this.id != null) {
      this.studentService
        .getById(this.id)
        .subscribe((student) => (this.student = student));
    }
  }

  editStudent() {
    const studDialog = this.dialog.open(StudentDialogComponent, {
      data: this.student,
    });

    studDialog.afterClosed().subscribe((student) => {
      if (student !== undefined) {
        this.studentService.update(this.id, student);
      }
    });
  }
}
