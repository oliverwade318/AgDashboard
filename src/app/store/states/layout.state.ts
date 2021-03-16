export interface LayoutContext{
  showMenu: boolean;
  viewport: {
    height: number;
    width: number;
  }
}

export const initalState: LayoutContext = {
  showMenu: true,
  viewport: {
    height: window.innerHeight,
    width: window.innerWidth
  }
}
