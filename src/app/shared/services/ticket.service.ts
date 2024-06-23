import { Injectable } from '@angular/core';
import {User} from "../../interfaces/user.interface";
import {mockUsers} from "../../mock/users.mock";
import {Observable, of, throwError} from "rxjs";
import {Ticket} from "../../interfaces/ticket.interface";
import {mockTickets} from "../../mock/tickets.mock";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor() { }
  editTicket(ticket: Ticket): Observable<Ticket> {
    let selectedTicketIndex = mockTickets.findIndex(
      item => item.id === ticket.id);
    if(selectedTicketIndex === -1) {
      return throwError(() => ({error: 'Ticket is not found!'}));
    } else {
      const newTicket = {...mockTickets[selectedTicketIndex], ...ticket};
      mockTickets[selectedTicketIndex] = newTicket;
      return of(newTicket);
    }
  }

  loadTicket(id: number): Observable<Ticket> {
    let selectedTicketIndex = mockTickets.findIndex(
      item => item.id === id);
    if(selectedTicketIndex === -1) {
      return throwError(() => ({error: 'Ticket is not found!'}));
    } else {
      return of(mockTickets[selectedTicketIndex]);
    }

  }

  getTicketList (userId: number) {
    return of(mockTickets.filter((ticket) => ticket.userId === userId));
  }
}
