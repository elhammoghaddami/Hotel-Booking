import { Component, OnInit } from '@angular/core';
import { HotelService } from '../core/services/hotel.service';

@Component({
  selector: 'app-submited',
  templateUrl: './submited.component.html',
  styleUrls: ['./submited.component.scss']
})
export class SubmitedComponent implements OnInit {
  reservedHotel = JSON.parse(localStorage.getItem('reservedHotel'));
  prices = JSON.parse(localStorage.getItem('prices'));

  constructor(private hotelService: HotelService) {}

  ngOnInit(): void {
    this.reservedHotel;
    debugger
  }

}
