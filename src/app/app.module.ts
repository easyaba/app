import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildListComponent } from './child-list/child-list.component';
import { ChildDetailComponent } from './child-detail/child-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TimerTriggerComponent } from './timer-trigger/timer-trigger.component';
import { environment } from '../environments/environment';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentListItemComponent } from './student-list/student-list-item/student-list-item.component';
import { CountTriggerComponent } from './count-trigger/count-trigger.component';
import { TestComponent } from './test/test.component';
import { IntervalTriggerComponent } from './interval-trigger/interval-trigger.component';
import { BehaviorListComponent } from './behavior-list/behavior-list.component';
import { BehaviorListItemComponent } from './behavior-list/behavior-list-item/behavior-list-item.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
    IntervalTriggerComponent,
    BehaviorListComponent,
    BehaviorListItemComponent,
    StudentDetailComponent,
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
    FormsModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
