import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@ngneat/reactive-forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from '../model/student.model';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.scss']
})
export class StudentDialogComponent implements OnInit {

  form: FormGroup<Student>;
  title: string = "Vytvor študenta";

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<StudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) student: Student
  ) {

    this.form = this.fb.group<Student>({
      id: new FormControl(undefined),
      name: new FormControl('', Validators.required),
      age: new FormControl(undefined, [Validators.min(3), Validators.max(99)]),
      surname: new FormControl(undefined)
    })

    if (student.name !== '') {
      this.title = "Aktualizuj študenta";
    }

    this.form.setValue(student);

   }

  ngOnInit(): void {

  }

  save() {
    this.dialogRef.close(this.form.value);
}

close() {
    this.dialogRef.close();
}

}
