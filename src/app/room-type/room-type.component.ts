import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromRoot from '../core/state';
import { take, map, distinctUntilChanged } from 'rxjs/operators';
import { merge } from 'rxjs';
import { HotelInfoI } from '../core/interfaces/hotelInfoGroup.interface'
import { HotelAndDatePageActions } from '../hotel-and-date/actions';

@Component({
  selector: 'app-room-type',
  templateUrl: './room-type.component.html',
  styleUrls: ['./room-type.component.scss']
})
export class RoomTypeComponent implements OnInit {

  title = 'step2';
  btnTxt = 'Kaydet ve Devam Et';
  roomForm = this.fb.group(
    {
      roomType: [null, [Validators.required]],
      roomScenic: [null, [Validators.required]],
    }
  )
  roomTypeCtrl = this.roomForm.get('roomType');
  roomScenicCtrl = this.roomForm.get('roomScenic');
  priceRate = null;
  price = null;
  dayCount = null;
  submitted = false;
  reserveObj;
  hotelSelected = {} as HotelInfoI;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.hotelSelected = JSON.parse(localStorage.getItem('hotelSelected'));
    this.store
      .select(fromRoot.selectHotelGroupData)
      .pipe(take(1))
      .subscribe((obj) => {
        this.reserveObj = obj;
        const diffInMs = Math.abs(this.reserveObj.endDate - this.reserveObj.startDate);
        this.dayCount = diffInMs / (1000 * 60 * 60 * 24);
      }
      );
    this.store
      .select(fromRoot.selectHotelGroupData)
      .pipe(take(1))
      .subscribe((roomInfo) =>
        this.roomForm.patchValue(roomInfo, { emitEvent: false })
      );
    const room_type$ = this.roomTypeCtrl.valueChanges.pipe(
      map((roomType) => ({ roomType } as Partial<any>))
    );
    const room_scenic$ = this.roomScenicCtrl.valueChanges.pipe(
      map((room_scenic) => ({ room_scenic } as Partial<any>))
    );
    const room_scenic_Rate$ = this.roomScenicCtrl.valueChanges.pipe(
      map((room_scenic) => ({ room_scenic } as Partial<any>))
    );

    merge(room_type$, room_scenic$).subscribe(
      (payload: Partial<any>) => {
        this.store.dispatch(HotelAndDatePageActions.patch({ payload }));
      }
    );

    this.roomForm.valueChanges
      .pipe(
        map(() => this.roomForm.valid),
        distinctUntilChanged()
      )
      .subscribe((isValid: boolean) =>
        this.store.dispatch(
          HotelAndDatePageActions.changeValidationStatus({ isValid })
        )
      );
  }

  goToNextStep() {
    if (this.roomForm.invalid) {
      this.submitted = true;
      return;
    }
    const prices = {
      'priceRate': this.priceRate,
      'dayCount': this.dayCount,
      'price': this.price
    }
    localStorage.setItem('prices', JSON.stringify(prices));
    this.router.navigate(['step3']);
  }

  goToPreviousStep() {
    this.router.navigate(['step1']);
  }

}
