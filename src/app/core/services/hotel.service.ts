import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { baseUrl } from '../../shared/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private api: ApiService) { }

  getHotels() {
    return this.api.getGeneral({}, baseUrl.hotels);
  }
  getHotelDetails() {
    return this.api.getGeneral({}, baseUrl.hotelDetails);
  }
  hotelBookings(data) {
    return this.api.postGeneral(data, baseUrl.hotelBookings);
  }

}
