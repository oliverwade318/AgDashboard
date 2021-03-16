import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LayoutContext } from "../states/layout.state";

const layoutContext = createFeatureSelector('layoutContext');

export const selectShowMenu = createSelector(layoutContext, (state: LayoutContext) => state.showMenu);
export const selectViewportHeight = createSelector(layoutContext, (state: LayoutContext) => state.viewport.height);
export const selectViewportWidth = createSelector(layoutContext, (state: LayoutContext) => state.viewport.width);
