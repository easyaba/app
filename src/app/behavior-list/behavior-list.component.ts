import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { catchError, delay, Observable } from 'rxjs';
import { Behavior } from '../model/behavior.model';


@Component({
  templateUrl: './behavior-list.component.html',
  styleUrls: ['./behavior-list.component.scss'],
})
export class BehaviorListComponent implements OnInit {
  list$: Observable<Behavior[]>;
  constructor(private readonly afs: AngularFirestore) {
    this.afs
    // .collection<Test>('behavior').get().subscribe(a => console.log(`JSON ${JSON.stringify(a.docs[0].data(), null, 2)}`))

    this.list$ = this.afs
      .collection<Behavior>('behavior')
      .valueChanges({ idField: "id" })
      .pipe(
        delay(1000),
        catchError((e) => {
          console.log(e);
          return [];
        })
      );
  }

  ngOnInit(): void {

  }

  openDetail(item: Behavior) {
    alert(`You clicked ${item.name}`)
  }

  async update(item: Behavior) {
    const res = await this.afs.collection('behavior').doc(item.id).update({ test: new Date().toISOString() })
  }
}
