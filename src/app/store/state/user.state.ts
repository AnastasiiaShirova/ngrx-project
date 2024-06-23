import {User} from "../../interfaces/user.interface";

export interface UserState {
  loggedInUser: User|null;
}

export const initialUserState: UserState = {
  loggedInUser: null,
}
