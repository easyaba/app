import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AbcComponent } from './abc.component';



@NgModule({
  declarations: [AbcComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'', component: AbcComponent}])
  ]
})
export class AbcModule { }
