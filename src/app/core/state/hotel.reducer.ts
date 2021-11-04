import { createReducer, on } from '@ngrx/store';
import { ReserveObjGroup } from '../models/reserveObj.model';
import { ReserveObj } from '../interfaces/reserveObjGroup.interface';
import { HotelAndDatePageActions } from '../../hotel-and-date/actions';

export interface State {
  data: ReserveObj;
  isValid: boolean;
}

const initialState = new ReserveObjGroup();

const hotelReducer = createReducer(
  initialState,
  on(
    HotelAndDatePageActions.patch,
    (state: State, action: ReturnType<typeof HotelAndDatePageActions.patch>) => ({
      ...state,
      data: { ...state.data, ...action.payload }
    })
  ),
  on(
    HotelAndDatePageActions.changeValidationStatus,
    (
      state: State,
      { isValid }: ReturnType<typeof HotelAndDatePageActions.changeValidationStatus>
    ) => ({
      ...state,
      isValid
    })
  )
);

export function reducer(state: State, action: HotelAndDatePageActions.Union) {
  return hotelReducer(state, action);
}

export const selectHotelGroupData = (state: State) => state.data;
export const selectHotelGroupIsValid = (state: State) => state.isValid;
