import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { RoadMapComponent } from './road-map/road-map.component';

@NgModule({
  declarations: [HeaderComponent, RoadMapComponent],
  imports: [CommonModule, RouterModule.forChild([])],
  exports: [HeaderComponent,RoadMapComponent]
})
export class CoreModule {}
