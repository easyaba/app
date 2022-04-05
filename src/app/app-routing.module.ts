import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildDetailComponent } from './child-detail/child-detail.component';
import { ChildListComponent } from './child-list/child-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'child-list', pathMatch: 'full' },
  { path: 'child-list', component: ChildListComponent },
  { path: 'child/:id', component: ChildDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
