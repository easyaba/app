import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BehaviorListComponent } from './behavior-list/behavior-list.component';
import { ChildDetailComponent } from './child-detail/child-detail.component';
import { ChildListComponent } from './child-list/child-list.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'child-list', component: ChildListComponent },
  { path: 'child/:id', component: ChildDetailComponent },
  { path: 'students', component: StudentListComponent },
  { path: 'behaviors', component: BehaviorListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
