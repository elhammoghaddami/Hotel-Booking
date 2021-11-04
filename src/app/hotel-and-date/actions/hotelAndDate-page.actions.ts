import { createAction, props } from '@ngrx/store';

export const patch = createAction(
  '[HotelAndDate Page] Patch Value',
  props<{ payload: Partial<any> }>()
);

export const changeValidationStatus = createAction(
  '[HotelAndDate Page] Change Validation Status',
  props<{ isValid: boolean }>()
);

export type Union = ReturnType<typeof patch | typeof changeValidationStatus>;
