import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelAndDateRoutingModule } from './hotel-and-date-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HotelAndDateComponent } from './hotel-and-date.component';


@NgModule({
  declarations: [HotelAndDateComponent],
  imports: [
    CommonModule,
    HotelAndDateRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class HotelAndDateModule { }
