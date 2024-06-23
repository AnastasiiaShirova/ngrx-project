import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {provideRouterStore, routerReducer} from '@ngrx/router-store';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {userFeature} from "./store/reducers/user.reducer";
import {ticketFeature} from "./store/reducers/ticket.reducer";
import * as userEffects from "./store/effects/user.effects"
import * as ticketEffects from "./store/effects/tickets.effects"

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({
        router: routerReducer,
        [userFeature.name]: userFeature.reducer,
        [ticketFeature.name]: ticketFeature.reducer,
      }
    ),
    provideEffects(
      userEffects,
      ticketEffects,
    ),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode()
    }),
    provideRouterStore(),
    provideAnimationsAsync()]
};
