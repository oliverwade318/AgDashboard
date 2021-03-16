import { Action, createReducer, on } from "@ngrx/store"
import { initalState, LayoutContext } from "../states/layout.state"

import * as layoutActions from '../actions/layout.actions';

const enum VP_SIZE {
  SM = 600,
  MD = 960,
  LG = 1280,
  XL = 1920
}

/**
 * Responsive behavior
 */
const _layoutReducer = createReducer(
  initalState,
  on(layoutActions.doToggleMenu, (state) => ({ ...state, showMenu: !state.showMenu })),

  on(layoutActions.doResize, (state, props) => {

    let showMenu: boolean = (props.width < VP_SIZE.MD) ? false : true;
    return { ...state, showMenu, viewport: props }
  }),
)

export function layoutReducer(state: LayoutContext, action: Action) {
  return _layoutReducer(state, action);
}
