import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorType, BehaviourEvent, Student, StudentSession } from './model/student.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
@UntilDestroy()
export class AppComponent {
  title = 'easyaba';
  user: any | undefined;
  isHandset = false;
  list$: Observable<Student[]>;

  constructor(private breakpointObserver: BreakpointObserver,
    private readonly store: AngularFirestore) {
    this.list$ = store.collection<Student>('students').valueChanges({ idField: 'id' });
    this.breakpointObserver
      .observe(Breakpoints.Handset)
      .pipe(
        untilDestroyed(this),
        map((result) => result.matches),
        shareReplay()
      )
      .subscribe((matches) => {
        this.isHandset = matches;
      });
  }

}
