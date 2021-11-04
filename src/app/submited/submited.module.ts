import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitedComponent } from './submited.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SubmitedComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: SubmitedComponent }]),
    SharedModule
  ]
})
export class SubmitedModule { }
