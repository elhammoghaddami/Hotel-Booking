import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../state';

@Component({
  selector: 'app-road-map',
  templateUrl: './road-map.component.html',
  styleUrls: ['./road-map.component.scss']
})
export class RoadMapComponent implements OnInit {
  hotelGroupIsValid$ = this.store.select(
    fromRoot.selectHotelGroupIsValid
  );

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit(): void {
  }

}
