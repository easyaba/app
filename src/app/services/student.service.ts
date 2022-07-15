import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Student } from '../model/student';

@Injectable({ providedIn: 'root' })
export class StudentService {
  private dbPath = '/students';

  studentRef: AngularFirestoreCollection<Student>;

  constructor(private angularFirestore: AngularFirestore) {
    this.studentRef = angularFirestore.collection(this.dbPath);
  }

  getAll(): Observable<Student[]> {
    return this.studentRef.valueChanges({ idField: 'id' });
  }

  getById(id: string): Observable<Student | undefined> {
    return this.studentRef.doc(id).valueChanges();
  }

  create(student: Student): any {
    return this.studentRef.add({ ...student });
  }

  update(id: string, data: any): Promise<void> {
    return this.studentRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.studentRef.doc(id).delete();
  }
}
