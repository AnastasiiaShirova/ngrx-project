import {CanActivateFn, Router, UrlTree} from '@angular/router';
import {inject} from "@angular/core";
import {UserFacade} from "../services/user.facade";
import {map} from "rxjs";

export const loginGuard: CanActivateFn = () => {
  const userFacade = inject(UserFacade);
  const router = inject(Router);
  return userFacade.user$.pipe(
    map((res) => !!res || router.createUrlTree(['login']))
  );
};
