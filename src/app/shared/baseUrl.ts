import { environment } from '../../environments/environment';

// tslint:disable-next-line: class-name
export class baseUrl {
  static url = environment.baseUrl;

  // hotels
  static hotels = baseUrl.url + '/hotels';
  static hotelDetails = baseUrl.url + '/hotel-details';
  static hotelBookings = baseUrl.url + '/hotel-bookings';
  
}
