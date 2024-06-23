import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject} from "@angular/core";
import {UserService} from "../../shared/services/user.service";
import {userActions} from "../actions/user.actions";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {User} from "../../interfaces/user.interface";
import {Router} from "@angular/router";

export const loginEffects = createEffect(
  () => {
    const actions$ = inject(Actions);
    const userService$ = inject(UserService);
    const router = inject(Router);

    return actions$.pipe(
      ofType(userActions.loginUser),
      switchMap((userData) =>
        userService$.login(userData.login, userData.password).pipe(
          tap((user: User) => router.navigate([`/`])),
          map((user: User) => userActions.loginUserSuccess(user)),
          catchError((err) => of(userActions.loginUserFailed(err)))
        )
      )
    )
  }, {functional: true}
);

export const editUserEffects = createEffect(
  () => {
    const actions$ = inject(Actions);
    const userService$ = inject(UserService);

    return actions$.pipe(
      ofType(userActions.editUser),
      switchMap((user: User) => userService$.editUser(user).pipe(
        map((user) => userActions.editUserSuccess(user)),
        catchError((err) => of(userActions.editUserFailed(err)))
      ))
    )
  }, {functional: true}
)

