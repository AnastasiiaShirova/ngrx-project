import { Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {loginGuard} from "./shared/guards/login.guard";
import {MainComponent} from "./components/main/main.component";
import {TicketsListComponent} from "./shared/components/tickets-list/tickets-list.component";
import {TicketsDetailComponent} from "./shared/components/tickets-detail/tickets-detail.component";

export const routes: Routes = [
  { path: '',
    component: MainComponent,
    canActivate: [loginGuard],
  },
  { path: 'login',
    component: LoginComponent,
  },
  { path: 'profile/:id',
    component: ProfileComponent,
    canActivate: [loginGuard],
  },
  { path: 'tickets',
    component: TicketsListComponent,
    canActivate: [loginGuard],
  },
  { path: 'ticket/:id',
    component: TicketsDetailComponent,
    canActivate: [loginGuard],
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
