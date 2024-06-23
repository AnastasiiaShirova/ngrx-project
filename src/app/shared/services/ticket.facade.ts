import {inject, Injectable} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {ticketActions} from "../../store/actions/ticket.actions";
import {Ticket} from "../../interfaces/ticket.interface";
import {selectTicket, selectTicketList} from "../../store/selectors/ticket.selector";

@Injectable({providedIn: 'root'})
export class TicketFacade {
  private readonly store = inject(Store);

  public readonly ticket$ = this.store.pipe(select(selectTicket));
  public readonly ticketList$ = this.store.pipe(select(selectTicketList));
  editTicket(ticket: Ticket) {
    this.store.dispatch(ticketActions.editTicket(ticket));
  }

  getTicketList(userId: number) {
    this.store.dispatch(ticketActions.getTicketList({userId}));
  }

  selectTicket(ticket: Ticket) {
    this.store.dispatch(ticketActions.selectTicket(ticket));
  }

  loadTicket(id: number) {
    this.store.dispatch(ticketActions.loadTicket({id}))
  }
}
