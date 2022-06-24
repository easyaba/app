import { Component, OnInit } from '@angular/core';
import { Firestore, collection, collectionData, DocumentData } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore'
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Student } from '../model/student.model';
import { StudentDialogComponent } from '../student-dialog/student-dialog.component';

@Component({
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  students: AngularFirestoreCollection<Student> | undefined;
  list$: Observable<Student[]>;

  constructor(
    private dialog: MatDialog,
    private readonly store: AngularFirestore) {
      this.list$ = store.collection<Student>('students').valueChanges({ idField: 'id' });
  }

  openDialog() {
    const studDialog = this.dialog.open(StudentDialogComponent, {
      data: {name: '', surname: '', age: 3, id: ''}
    })

    studDialog.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.students?.add(result)
      }
    })
  }

  openStudent(student: Student) {
    const studDialog = this.dialog.open(StudentDialogComponent, {
      data: student
    })

    studDialog.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.students?.doc(student.id).update(result)
      }
    })
  }

  ngOnInit(): void {
    this.students = this.store.collection<Student>('students');
  }

}
