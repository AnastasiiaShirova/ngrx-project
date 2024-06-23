import {createFeatureSelector, createSelector} from "@ngrx/store";
import {UserState} from "../state/user.state";
import {USER_FEATURE_KEY} from "../reducers/user.reducer";

export const selectUserState = createFeatureSelector<UserState>(USER_FEATURE_KEY);
export const selectUser = createSelector(
  selectUserState,
  (state: UserState) => state.loggedInUser);
