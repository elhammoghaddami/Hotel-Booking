import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../core/state';
import { take, map, distinctUntilChanged } from 'rxjs/operators';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HotelService } from '../core/services/hotel.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  title = "step3"
  btnTxt = 'Ödemeyi Yap ve Bitir';
  payForm = this.fb.group(
    {
      card_name: [null, [Validators.required]],
      card_number: [null, [Validators.required]],
      card_date_month: [null, [Validators.required]],
      card_date_year: [null, [Validators.required]],
      card_cvv: [null, [Validators.required]],
    }
  )
  submitted = false;
  hotelSelected: any;
  prices: any;
  reserveObj;
  constructor(private router: Router,
    private fb: FormBuilder,
    private store: Store<fromRoot.State>,
    private hotelService: HotelService) { }

  ngOnInit(): void {
    this.hotelSelected = JSON.parse(localStorage.getItem('hotelSelected'));
    this.prices = JSON.parse(localStorage.getItem('prices'));
    this.store
      .select(fromRoot.selectHotelGroupData)
      .pipe(take(1))
      .subscribe((obj) => {
        this.reserveObj = obj;
        debugger
      }
      );
  }
  goToNextStep() {
    if (this.payForm.invalid) {
      this.submitted = true;
      return;
    }
    const obj = {
      hotel_id: this.hotelSelected.hotel_id,
      start_date: this.reserveObj.startDate,
      end_date: this.reserveObj.endDate,
      adult: this.reserveObj.adults,
      child: this.reserveObj.child,
      room_type: this.reserveObj.roomType,
      room_scenic: this.reserveObj.room_scenic,
      price: this.prices.dayCount * ((this.prices.price * this.prices.priceRate / 100) + this.prices.price),
      coupon_code: "CODE100",
      card_name: this.payForm.value.card_name,
      card_number: this.payForm.value.card_number,
      card_date_month: this.payForm.value.card_date_month,
      card_date_year: this.payForm.value.card_date_year,
      card_cvv: this.payForm.value.card_cvv
    }
    this.hotelService.hotelBookings(obj).subscribe((response) => {

      const reservedHotel = { ...response, city: this.hotelSelected.city, hotelName: this.hotelSelected.hotelName };

      localStorage.setItem('reservedHotel', JSON.stringify(reservedHotel));
      this.router.navigate(['submited']);
    });
  }

  goToPreviousStep() {
    this.router.navigate(['step2']);
  }
}
