import { User } from "src/app/shared/models/user.model";

export interface LoginContext {
  user: User,
  loading: boolean,
  error: string
}

export const initialState: LoginContext = {
  user: null,
  loading: false,
  error: null
}
