import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef, MatTable
} from "@angular/material/table";
import {mockTickets} from "../../../mock/tickets.mock";
import {TicketFacade} from "../../services/ticket.facade";
import {DatePipe} from "@angular/common";
import {Ticket} from "../../../interfaces/ticket.interface";
import {Router} from "@angular/router";
import {UserFacade} from "../../services/user.facade";

@Component({
  selector: 'app-tickets-list',
  standalone: true,
  imports: [
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
    DatePipe
  ],
  templateUrl: './tickets-list.component.html',
  styleUrl: './tickets-list.component.scss'
})
export class TicketsListComponent implements OnInit {
  @Input() isTicketRouteDisabled = false;

  dataSource: Ticket[] = [];
  displayedColumns: string[] = ['id', 'name', 'date'];

  constructor(public ticketFacade: TicketFacade,private userFacade: UserFacade, private router: Router) {}

  ngOnInit() {
    this.userFacade.user$.subscribe((user) => this.ticketFacade.getTicketList(user!.id))
    this.ticketFacade.ticketList$.subscribe((data: Ticket[]) => this.dataSource = data);
  }


  getTicketDetail(ticket: Ticket) {
    this.ticketFacade.selectTicket(ticket);
    if(!this.isTicketRouteDisabled) {
      this.router.navigate([`/ticket/${ticket.id}`])
    }
  }
}
