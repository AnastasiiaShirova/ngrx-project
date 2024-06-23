import {createFeatureSelector, createSelector} from "@ngrx/store";
import {TicketState} from "../state/ticket.state";
import {TICKET_FEATURE_KEY} from "../reducers/ticket.reducer";

export const selectTicketState = createFeatureSelector<TicketState>(TICKET_FEATURE_KEY);
export const selectTicket = createSelector(
  selectTicketState,
  (state: TicketState) => state.selectedTicket);

export const selectTicketList = createSelector(
  selectTicketState,
  (state: TicketState) => state.ticketsList);
