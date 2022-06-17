import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from '../model/student';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogComponent } from '../student-dialog/student-dialog.component';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss'],
})
export class StudentDetailComponent implements OnInit {
  student?: Student;
  today: Date = new Date();
  student$: Observable<Student | undefined> | undefined;
  list$: Observable<Student[]> | undefined;
  id?: string | null;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private dialog: MatDialog,
    private firestore: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getStudent();
  }

  goBack(): void {
    this.location.back();
  }

  private getStudent(): void {
    this.firestore
      .doc<Student>(`students/${this.id}`)
      .valueChanges()
      .subscribe((student) => (this.student = student));
  }

  editStudent() {
    const studDialog = this.dialog.open(StudentDialogComponent, {
      data: this.student,
    });

    studDialog.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        this.firestore.doc<Student>(`students/${this.id}`).update(result);
      }
    });
  }
}
