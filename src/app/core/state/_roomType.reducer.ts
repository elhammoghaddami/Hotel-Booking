import { createReducer, on } from '@ngrx/store';
import { ReserveObjGroup } from '../models/reserveObj.model';
import { ReserveObj } from '../interfaces/reserveObjGroup.interface';
// import { RoomTypePageActions } from '../../room-type/actions';

export interface State {
  data: ReserveObj;
  isValid: boolean;
}

const initialState = new ReserveObjGroup();

// const hotelReducer = createReducer(
//   initialState,
//   on(
//     RoomTypePageActions.patch,
//     (state: State, action: ReturnType<typeof RoomTypePageActions.patch>) => ({
//       ...state,
//       data: { ...state.data, ...action.payload }
//     })
//   ),
//   on(
//     RoomTypePageActions.changeValidationStatus,
//     (
//       state: State,
//       { isValid }: ReturnType<typeof RoomTypePageActions.changeValidationStatus>
//     ) => ({
//       ...state,
//       isValid
//     })
//   )
// );

// export function reducer(state: State, action: RoomTypePageActions.Union) {
//   return hotelReducer(state, action);
// }

export const selectRoomTypeGroupData = (state: State) => state.data;
export const selectRoomTypeGroupIsValid = (state: State) => state.isValid;
