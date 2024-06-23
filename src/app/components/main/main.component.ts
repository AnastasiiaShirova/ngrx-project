import { Component } from '@angular/core';
import {TicketsListComponent} from "../../shared/components/tickets-list/tickets-list.component";
import {AsyncPipe, NgIf} from "@angular/common";
import {TicketsDetailComponent} from "../../shared/components/tickets-detail/tickets-detail.component";
import {TicketFacade} from "../../shared/services/ticket.facade";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    TicketsListComponent,
    NgIf,
    TicketsDetailComponent,
    AsyncPipe
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  constructor(public ticketFacade: TicketFacade) {}


}
