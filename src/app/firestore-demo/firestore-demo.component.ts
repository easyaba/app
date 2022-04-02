import { Component, OnInit } from '@angular/core';
import {
  addDoc,
  collectionData,
  doc,
  docData,
  Firestore,
  query,
  setDoc,
} from '@angular/fire/firestore';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

import { collectionGroup } from '@firebase/firestore';
import { Observable } from 'rxjs';

interface Test {
  name: string;
  surname: string;
}

@Component({
  templateUrl: './firestore-demo.component.html',
  styleUrls: ['./firestore-demo.component.scss'],
})
export class FirestoreDemoComponent implements OnInit {
  list$: Observable<Test[]>;
  constructor(private readonly afs: AngularFirestore) {
    this.list$ = this.afs.collection<Test>('test').valueChanges();
  }

  ngOnInit(): void {
    // this.testNewAPI();
    this.testUsingCompatApi();
  }

  // testNewAPI() {
  //   const testCollection = collection(this.firestore, 'test');
  //   collectionData(testCollection).subscribe((data) => {
  //     console.log(`Data from firestore (NEW API) : ${JSON.stringify(data)}`);
  //   });
  //   addDoc(testCollection, { name: 'first', surname: 'firstsurname' });
  //   addDoc(testCollection, { name: 'other', surname: 'secondsurname' });

  //   const q = collectionGroup(this.firestore, 'test');
  // }

  testUsingCompatApi() {
    const collection = this.afs.collection<Test>('test');
    collection
      .get()
      .subscribe((data) =>
        console.log(
          `Data from Firebase using COMPAT API: \n${JSON.stringify(data.docs)}`
        )
      );
    collection.add({ name: 'first', surname: `${new Date().toISOString()}` });
  }

  addData() {
    const collection = this.afs.collection<Test>('test');
    collection.add({ name: 'Test', surname: 'Test' });
  }
}
