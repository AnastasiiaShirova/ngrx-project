import {inject, Inject, Injectable} from "@angular/core";
import {createFeatureSelector, select, Store} from "@ngrx/store";
import {userActions} from "../../store/actions/user.actions";
import {User} from "../../interfaces/user.interface";
import {UserState} from "../../store/state/user.state";
import {USER_FEATURE_KEY} from "../../store/reducers/user.reducer";
import {selectUser} from "../../store/selectors/user.selector";

@Injectable({providedIn: 'root'})
export class UserFacade {
  private readonly store = inject(Store);

  public readonly user$ = this.store.pipe(select(selectUser));
  loginUser(login: string, password: string) {
    this.store.dispatch(userActions.loginUser({login, password}))
  }

  editUser(user: User) {
    this.store.dispatch(userActions.editUser(user))
  }
}
