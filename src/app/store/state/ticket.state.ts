import {Ticket} from "../../interfaces/ticket.interface";

export interface TicketState {
  selectedTicket: null|Ticket;
  ticketsList: Ticket[];
}

export const initialTicketState: TicketState = {
  selectedTicket: null,
  ticketsList: [],
}
