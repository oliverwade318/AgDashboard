import { appReducer } from "./app.reducer";
import { dashboardReducer } from "./dashboard.reducer";
import { loginReducer } from "./login.reducer";

export const reducers = {
  appContext: appReducer,
  userContext: loginReducer,
  dashboardContext: dashboardReducer
}
