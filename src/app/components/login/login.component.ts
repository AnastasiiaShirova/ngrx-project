import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {UserFacade} from "../../shared/services/user.facade";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({
    "login": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required)
  });
  hide = true;
  constructor(public userFacade: UserFacade) {}
  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }

  loginUser() {
    const loginFormRes = this.loginForm.getRawValue();
    this.userFacade.loginUser(loginFormRes.login, loginFormRes.password);
  }
}
