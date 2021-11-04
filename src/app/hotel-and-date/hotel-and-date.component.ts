import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromRoot from '../core/state';
import { HotelAndDatePageActions } from './actions';
import { map, take, distinctUntilChanged } from 'rxjs/operators';
import { merge } from 'rxjs';
import { HotelService } from 'src/app/core/services/hotel.service'
@Component({
  selector: 'app-hotel-and-date',
  templateUrl: './hotel-and-date.component.html',
  styleUrls: ['./hotel-and-date.component.scss']
})
export class HotelAndDateComponent implements OnInit {
  title = "step1"
  btnTxt = 'Kaydet ve Devam Et';
  hotels: any;
  submitted = false;
  stepOneForm = this.fb.group(
    {
      hotelName: [null, [Validators.required]],
      startDate: [null, [Validators.required]],
      endDate: [null, [Validators.required]],
      adults: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      child: [null, [Validators.min(0), Validators.max(5)]],
    }

  )
  hotelNameCtrl = this.stepOneForm.get('hotelName');
  startDateCtrl = this.stepOneForm.get('startDate');
  endDateCtrl = this.stepOneForm.get('endDate');
  adultsCtrl = this.stepOneForm.get('adults');
  childCtrl = this.stepOneForm.get('child');
  hotelDetails: any;
  hotelSelected: any;


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private store: Store<fromRoot.State>,
    private hotelService: HotelService
  ) {

  }
  get f() {
    return this.stepOneForm.controls;
  }
  ngOnInit() {
    this.getHotels();
    this.getHotelDetails()
    this.store
      .select(fromRoot.selectHotelGroupData)
      .pipe(take(1))
      .subscribe((formValue) =>
        this.stepOneForm.patchValue(formValue, { emitEvent: false })
      );
    const hotelName$ = this.hotelNameCtrl.valueChanges.pipe(
      map((hotelName: string) => ({ hotelName } as Partial<any>))
    );
    const startDate$ = this.startDateCtrl.valueChanges.pipe(
      map((startDate: string) => ({ startDate } as Partial<any>))
    );
    const endDate$ = this.endDateCtrl.valueChanges.pipe(
      map((endDate: string) => ({ endDate } as Partial<any>))
    );
    const adults$ = this.adultsCtrl.valueChanges.pipe(
      map((adults: string) => ({ adults } as Partial<any>))
    );
    const child$ = this.childCtrl.valueChanges.pipe(
      map((child: string) => ({ child } as Partial<any>))
    );

    merge(hotelName$, startDate$, endDate$, adults$, child$).subscribe(
      (payload: Partial<any>) => {
        this.store.dispatch(HotelAndDatePageActions.patch({ payload }));
      }
    );
    this.stepOneForm.valueChanges
      .pipe(
        map(() => this.stepOneForm.valid),
        distinctUntilChanged()
      )
      .subscribe((isValid: boolean) =>
        this.store.dispatch(
          HotelAndDatePageActions.changeValidationStatus({ isValid })
        )
      );
  }

  goToNextStep() {
    if (this.stepOneForm.invalid) {
      this.submitted = true;
      return;
    }
    this.router.navigate(['step2']);
  }
  getHotels() {
    this.hotelService.getHotels().subscribe((response) => {
      this.hotels = response;
    });
  }
  getHotelDetails() {
    this.hotelService.getHotelDetails().subscribe((response) => {
      this.hotelDetails = response;
    });
  }
  selectHotel(hotel) {
    this.hotelDetails.map((item) => {
      if (item.id === hotel.id) {
        this.hotelSelected = item;
        this.hotelSelected = { ...item, hotelName: hotel.hotel_name };
        localStorage.setItem('hotelSelected', JSON.stringify(this.hotelSelected));
        item.max_adult_size && this.stepOneForm.controls['adults'].setValidators([
          Validators.max(item.max_adult_size),
        ]);
        item.child_status ? this.stepOneForm.get('child').enable() : this.stepOneForm.get('child').disable()
      }
    }
    )
  }
}
