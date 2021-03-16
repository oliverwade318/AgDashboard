import { createAction, props } from "@ngrx/store";

export const doToggleMenu = createAction('[Layout Component] toggleMenu');

export const doResize = createAction(
  '[Layout] Do Resize',
  props<{ height: number, width: number }>()
)
