import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelAndDateComponent } from './hotel-and-date.component'

const routes: Routes = [
  { path: '', component: HotelAndDateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelAndDateRoutingModule { }
