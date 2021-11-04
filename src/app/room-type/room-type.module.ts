import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomTypeRoutingModule } from './room-type-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RoomTypeComponent } from './room-type.component';


@NgModule({
  declarations: [RoomTypeComponent],
  imports: [
    CommonModule,
    RoomTypeRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class RoomTypeModule { }
