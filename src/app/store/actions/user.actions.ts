import { Action } from '@ngrx/store';

export enum UserActionTypes {
  ACTION_LOGOUT = '[User] Logout',
  ACTION_LOGIN = '[User] Login',
  ACTION_CHANGE_CARREER = '[User] Change Carreer',
  ACTION_CHANGE_INPUT_CARREER= '[User] Change Input Carreer'
}

export class UserLogout implements Action {
  readonly type = UserActionTypes.ACTION_LOGOUT;
}

export class UserLogin implements Action {
  readonly type = UserActionTypes.ACTION_LOGIN;
  constructor(public payload) {}
}

export class ChangeCarreer implements Action {
  readonly type = UserActionTypes.ACTION_CHANGE_CARREER;
  constructor(public payload) {}
}

export class ChangeInputCarreer implements Action {
  readonly type = UserActionTypes.ACTION_CHANGE_INPUT_CARREER;
  constructor(public payload) {}
}