import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject} from "@angular/core";
import {TicketService} from "../../shared/services/ticket.service";
import {ticketActions} from "../actions/ticket.actions";
import {catchError, map, of, switchMap} from "rxjs";

export const ticketsEffects = createEffect(() => {
  const actions$ = inject(Actions);
  const ticketService$ = inject(TicketService);

  return actions$.pipe(
    ofType(ticketActions.editTicket),
    switchMap((ticketData) =>
    ticketService$.editTicket(ticketData).pipe(
      map((ticket) => ticketActions.editTicketSuccess(ticket)),
      catchError((err) => of(ticketActions.editTicketFailed(err)))
    ))
  )
}, {functional: true})

export const getTicketsListEffects = createEffect(() => {
  const actions$ = inject(Actions);
  const ticketService$ = inject(TicketService);

  return actions$.pipe(
    ofType(ticketActions.getTicketList),
    switchMap((data) =>
    ticketService$.getTicketList(data.userId).pipe(
      map((tickets) => ticketActions.getTicketListSuccess({tickets: tickets}))
    ))
  )
},{functional: true})

export const loadTicketEffects = createEffect(() => {
  const actions$ = inject(Actions);
  const ticketService$ = inject(TicketService);

  return actions$.pipe(
    ofType(ticketActions.loadTicket),
    switchMap((ticketData) =>
      ticketService$.loadTicket(ticketData.id).pipe(
        map((ticket) => ticketActions.loadTicketSuccess(ticket)),
        catchError((err) => of(ticketActions.loadTicketFailed(err)))
      ))
  )
}, {functional: true})
