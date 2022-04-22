import { Injectable, OnInit } from '@angular/core';
import { concatMap, delay, from, map, Observable, of, Subject } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Timestamp } from 'firebase/firestore';
import { Session } from 'src/app/model/session.model';
import { BehaviourEvent } from 'src/app/model/behavior.model';
import { formatDate } from '@angular/common';

@Injectable()
export class SessionService implements OnInit {
  sessions!: AngularFirestoreCollection<Session>;
  sessions$: Observable<Session[]>;
  //Todo : remove and use from firebase
  fakeSession$!: Observable<Session[]>;

  constructor(private readonly store: AngularFirestore) {
    this.sessions$ = store.collection<Session>('sessions').valueChanges();
    this.fakeSession$ = this.produceFakeData();
  }
  ngOnInit(): void {
    this.sessions = this.store.collection<Session>('sessions');

  }

  getSession(sessionId: number) {
    this.sessions.doc('' + sessionId).get();
  }

  getSessions(): Observable<Map<String, Session[]>> {
    let sessionMap$: Observable<Map<String, Session[]>>;
    let sessionMap: Map<String, Session[]> = new Map();
    sessionMap$ = this.fakeSession$.pipe(
      map((sessionList) => {
        sessionList.forEach((ses) => {
          let datePart = formatDate(ses.start.toDate(),'dd.MM.yyyy','en-US');
          //TODO: load this from firebase
          //ses.behaviours = this.generateBehaviours();
          let dateSessions: Session[] = [];
          if (!sessionMap.has(datePart)) {
            sessionMap.set(datePart, dateSessions);
          } else {
            dateSessions = sessionMap.get(datePart)!;
          }
          dateSessions.push(ses);
        });
        return sessionMap;
      })
    );
    return sessionMap$;
  }

  generateBehaviours(): BehaviourEvent[] {
    let result: BehaviourEvent[] = [
      {
        behaviourId: '1',
        type: 'COUNTER',
        behaviourName: 'test',
        start: new Date(),
      },
      {
        behaviourId: '2',
        behaviourName: 'Plač',
        type: 'COUNTER',
        start: new Date(),
        end: new Date(),
      },
      {
        behaviourId: '3',
        behaviourName: 'Plač',
        type: 'COUNTER',
        start: new Date(),
        end: new Date(),
      },
      {
        behaviourId: '4',
        behaviourName: 'Smiech',
        type: 'TIMER',
        start: new Date('9/26/2021 08:00'),
        end: new Date('9/26/2021 08:02'),
        duration: 120
      },
      {
        behaviourId: '5',
        behaviourName: 'Hnev',
        type: 'PART_INTERVAL',
        start: new Date('9/26/2021 08:10'),
        end: new Date('9/26/2021 08:14'),
        interval:[true,true,false,false,true]
      },
      {
        behaviourId: '6',
        behaviourName: 'Ignoracia',
        type: 'FULL_INTERVAL',
        start: new Date('9/26/2021 08:15'),
        end: new Date('9/26/2021 08:19'),
        interval:[true,true,false,false,true]
      },
      {
        behaviourId: '7',
        behaviourName: 'Smiech',
        type: 'TIMER',
        start: new Date('9/26/2021 08:20'),
        end: new Date('9/26/2021 08:21'),
        duration:60
      },
      {
        behaviourId: '8',
        behaviourName: 'Plač',
        type: 'COUNTER',
        start: new Date('9/26/2021 08:21'),
        end: new Date('9/26/2021 08:22'),
      },
      {
        behaviourId: '9',
        behaviourName: 'Ignoracia',
        type: 'FULL_INTERVAL',
        start: new Date('9/26/2021 08:23'),
        end: new Date('9/26/2021 08:29'),
        interval:[true,true,false]
      },


    ];
    return result;
  }

  saveSession(session: Session) {
    this.sessions.add(session);
  }

  produceFakeData(): Observable<Session[]> {
    let sessions : Session[]= [
      {
        studentId : "1",
        start: Timestamp.fromDate(new Date('9/26/2021 08:23')),
        end:Timestamp.fromDate(new Date('9/26/2021 08:53')),
        behaviours : this.generateBehaviours(),
        id:"1"
      },
      {
        studentId : "1",
        start: Timestamp.fromDate(new Date('9/27/2021 09:00')),
        end:Timestamp.fromDate(new Date('9/27/2021 11:30')),
        behaviours : this.generateBehaviours(),
        id:"1"
      },
      {
        studentId : "1",
        start: Timestamp.fromDate(new Date('9/27/2021 13:00')),
        behaviours : this.generateBehaviours(),
        id:"1"
      }

    ];

    return of(sessions);
    //let delayedObservable = Observable.of(sessions).delay(5000);

  }

}


