import { ReserveObj } from '../interfaces/reserveObjGroup.interface';

export class ReserveObjGroup {
  data = {
    hotelName: '',
    startDate: '',
    endDate: '',
    adults: null,
    child: null,
    price_rate: null,
    price: null,
    dayCount: null
  } as ReserveObj;
  isValid = false;
}
