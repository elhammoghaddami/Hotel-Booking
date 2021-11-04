import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import * as reservObj from './hotel.reducer';
import * as roomType from './_roomType.reducer';
import { ReserveObjGroup } from '../models/reserveObj.model';

export interface State {
  reservObj;
}

export const reducers: ActionReducerMap<State> = {
  reservObj: reservObj.reducer,
 
};

export const metaReducers: MetaReducer<State>[] = [];

export const selectHotelGroup = (state: State) => state.reservObj;
export const selectHotelGroupData = createSelector(
  selectHotelGroup,
  reservObj.selectHotelGroupData
);
export const selectHotelGroupIsValid = createSelector(
  selectHotelGroup,
  reservObj.selectHotelGroupIsValid
);




