import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { catchError, delay, Observable } from 'rxjs';
import { Behavior } from '../model/behavior.model';

interface Test {
  name: string;
  surname: string;
}

@Component({
  templateUrl: './behavior-list.component.html',
  styleUrls: ['./behavior-list.component.scss'],
})
export class BehaviorListComponent implements OnInit {
  list$: Observable<Behavior[]>;
  constructor(private readonly afs: AngularFirestore) {
    this.list$ = this.afs
      .collection<Test>('behavior')
      .valueChanges()
      .pipe(
        delay(1000),
        catchError((e) => {
          console.log(e);
          return [];
        })
      );
  }

  ngOnInit(): void {}
}
