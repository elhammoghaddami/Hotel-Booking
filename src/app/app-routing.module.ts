import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'step1', pathMatch: 'full' },
  {
    path: 'step1',
    loadChildren: () =>
      import('./hotel-and-date/hotel-and-date.module').then(m => m.HotelAndDateModule)
  },
  {
    path: 'step2',
    loadChildren: () =>
      import('./room-type/room-type.module').then(m => m.RoomTypeModule)
  },
  {
    path: 'step3',
    loadChildren: () =>
      import('./payment/payment.module').then(m => m.PaymentModule)
  },
  {
    path: 'submited',
    loadChildren: () =>
      import('./submited/submited.module').then(m => m.SubmitedModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
