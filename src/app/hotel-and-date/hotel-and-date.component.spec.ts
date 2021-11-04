import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelAndDateComponent } from './hotel-and-date.component';

describe('HotelAndDateComponent', () => {
  let component: HotelAndDateComponent;
  let fixture: ComponentFixture<HotelAndDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelAndDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelAndDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
