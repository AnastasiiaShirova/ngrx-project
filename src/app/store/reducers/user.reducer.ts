import {createFeature, createReducer, on} from "@ngrx/store";
import {initialUserState} from "../state/user.state";
import {userActions} from "../actions/user.actions";
import {state} from "@angular/animations";

export const USER_FEATURE_KEY = 'user';
export const userFeature = createFeature({
  name: USER_FEATURE_KEY,
  reducer: createReducer(
    initialUserState,
    on(userActions.loginUser, (state) => ({...state})),
    on(userActions.loginUserSuccess, (state, user) => ({
      ...state, loggedInUser: user
    })),
    on(userActions.loginUserFailed, (state, user) => ({
      ...state, loggedInUser: null
    })),

    on(userActions.editUser, (state) => ({...state})),
    on(userActions.editUserSuccess, (state, user) => ({
      ...state, loggedInUser: user
    })),
    on(userActions.loginUserFailed, (state) => ({...state})),
  )
})





