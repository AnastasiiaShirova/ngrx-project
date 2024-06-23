import {RouterReducerState} from "@ngrx/router-store";
import {initialUserState, UserState} from "./user.state";
import {initialTicketState, TicketState} from "./ticket.state";

export interface AppState {
  router?: RouterReducerState;
  user: UserState;
  ticket: TicketState;
}

export const initialAppState: AppState = {
  user: initialUserState,
  ticket: initialTicketState,
}

export function getInitialState(): AppState {
  return initialAppState;
}
