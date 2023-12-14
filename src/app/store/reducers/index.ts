import { ActionReducerMap } from "@ngrx/store";
import { userReducer, UserState } from "./user.reducer";
import { cartReducer, CartState } from "./cart.reducer";

interface AppState {
  userState: UserState;
  cartState: CartState;
}

export const reducers: ActionReducerMap<AppState> = {
  userState: userReducer,
  cartState: cartReducer
};
