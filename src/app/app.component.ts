import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {TicketsDetailComponent} from "./shared/components/tickets-detail/tickets-detail.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {TicketsListComponent} from "./shared/components/tickets-list/tickets-list.component";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatButton} from "@angular/material/button";
import {UserFacade} from "./shared/services/user.facade";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoginComponent, TicketsDetailComponent, ProfileComponent, TicketsListComponent, RouterLink, MatMenuTrigger, MatButton, MatMenu, MatMenuItem],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-ngrx';

  constructor(public userFacade: UserFacade) {}
}
