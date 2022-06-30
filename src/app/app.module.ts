import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from "@angular/material/form-field"

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
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { TimerTriggerComponent } from './timer-trigger/timer-trigger.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { StudentDialogComponent } from './student-dialog/student-dialog.component';
import { StudentListComponent } from './student-list/student-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentListItemComponent } from './student-list/student-list-item/student-list-item.component';
import { CountTriggerComponent } from './count-trigger/count-trigger.component';
import { TestComponent } from './test/test.component';
import { IntervalTriggerComponent } from './interval-trigger/interval-trigger.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildListComponent,
    ChildDetailComponent,
    TimerTriggerComponent,
    StudentDialogComponent,
    StudentListComponent,
    StudentListItemComponent,
    CountTriggerComponent,
    TestComponent,
    IntervalTriggerComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
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
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
