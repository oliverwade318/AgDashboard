export interface AppContext {
  token: string,
  name: string
}

export const initialState: AppContext = {
  token: null,
  name: null
}
