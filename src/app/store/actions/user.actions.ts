import {createActionGroup, props} from "@ngrx/store";
import {User} from "../../interfaces/user.interface";
export const userActions = createActionGroup({
  source: 'User/Api',
  events: {
    loginUser: props<{login: string; password: string }>(),
    loginUserSuccess: props<User>(),
    loginUserFailed: props<{error: any}>(),

    editUser: props<User>(),
    editUserSuccess: props<User>(),
    editUserFailed: props<{error: any}>(),
  }
});
