import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildListComponent } from './child-list/child-list.component';
import { ChildDetailComponent } from './child-detail/child-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { TimerTriggerComponent } from './timer-trigger/timer-trigger.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';
import { StudentListComponent } from './student-list/student-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentListItemComponent } from './student-list/student-list-item/student-list-item.component';
import { BehaviorListComponent } from './behavior-list/behavior-list.component';
import { BehaviorListItemComponent } from './behavior-list/behavior-list-item/behavior-list-item.component';
import { SessionListComponent } from './sessions/sessions-list/session-list.component';
import { SessionService } from './sessions/shared/session.service';
import { SessionListItemComponent } from './sessions/session-list-item/session-list-item.component';
import { SessionDateListComponent } from './sessions/sessions-date-list/session-date-list/session-date-list.component';
import { BehaviourListItemComponent } from './sessions/behaviour-list-item/behaviour-list-item.component';
import { BehaviourListComponent } from './sessions/behaviour-list/behaviour-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildListComponent,
    ChildDetailComponent,
    TimerTriggerComponent,
    StudentDialogComponent,
    StudentListComponent,
    StudentListItemComponent,
    BehaviorListComponent,
    BehaviorListItemComponent,
    SessionListComponent,
    SessionListItemComponent,
    SessionDateListComponent,
    BehaviourListItemComponent,
    BehaviourListComponent
  ],
  imports: [
    //core
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    //material
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [SessionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
