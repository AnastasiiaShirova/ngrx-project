import {createActionGroup, props} from "@ngrx/store";
import {Ticket} from "../../interfaces/ticket.interface";

export const ticketActions = createActionGroup({
  source: 'Ticket/Api',
  events: {
    getTicketList: props<{userId: number}>(),
    getTicketListSuccess: props<{tickets: Ticket[]}>(),
    getTicketListFailed: props<{error: any}>(),

    loadTicket: props<{id: number}>(),
    loadTicketSuccess: props<Ticket>(),
    loadTicketFailed: props<{error: any}>(),

    editTicket: props<Ticket>(),
    editTicketSuccess: props<Ticket>(),
    editTicketFailed: props<{error: any}>(),

    selectTicket: props<Ticket>(),
  }
})
