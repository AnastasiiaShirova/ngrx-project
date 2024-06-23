import {createFeature, createReducer, on} from "@ngrx/store";
import {initialTicketState} from "../state/ticket.state";
import {ticketActions} from "../actions/ticket.actions";

export const TICKET_FEATURE_KEY = 'ticket';
export const ticketFeature = createFeature({
  name: TICKET_FEATURE_KEY,
  reducer: createReducer(
    initialTicketState,
    on(ticketActions.editTicket, (state) => ({...state})),
    on(ticketActions.editTicketSuccess, (state, ticket) => ({
      ...state, selectedTicket: ticket,
    })),

    on(ticketActions.getTicketList, (state) => ({...state})),
    on(ticketActions.getTicketListSuccess, (state, ticket) => ({
      ...state, ticketsList: ticket.tickets,
    })),
    on(ticketActions.getTicketListFailed, (state) => ({...state})),


    on(ticketActions.selectTicket, (state, ticket) => ({
      ...state, selectedTicket: ticket,
    })),

    on(ticketActions.loadTicket, (state) => ({
      ...state,
    })),
    on(ticketActions.loadTicketSuccess, (state, ticket) => ({
      ...state, selectedTicket: ticket,
    })),
    on(ticketActions.loadTicketFailed, (state) => ({...state})),
  )
})
