import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildDetailComponent } from './child-detail/child-detail.component';
import { ChildListComponent } from './child-list/child-list.component';
import { FirestoreDemoComponent } from './firestore-demo/firestore-demo.component';

const routes: Routes = [
  { path: '', redirectTo: 'child-list', pathMatch: 'full' },
  { path: 'child-list', component: ChildListComponent },
  { path: 'child/:id', component: ChildDetailComponent },
  {
    path: 'abc',
    //children: [{ path: '', component: AbcComponent }],
    loadChildren: () => import('./abc/abc.module').then((m) => m.AbcModule),
  },
  { path: 'firestore', component: FirestoreDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
