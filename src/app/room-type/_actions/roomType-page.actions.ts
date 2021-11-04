import { createAction, props } from '@ngrx/store';

export const patch = createAction(
  '[RoomType Page] Patch Value',
  props<{ payload: Partial<any> }>()
);

export const changeValidationStatus = createAction(
  '[RoomType Page] Change Validation Status',
  props<{ isValid: boolean }>()
);

export type Union = ReturnType<typeof patch | typeof changeValidationStatus>;
