import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption, MatSelect} from "@angular/material/select";
import {NgForOf} from "@angular/common";
import {MatNativeDateModule} from "@angular/material/core";
import {UserFacade} from "../../shared/services/user.facade";
import {mockUsers} from "../../mock/users.mock";
import {User} from "../../interfaces/user.interface";
import {of} from "rxjs";
import {mockTickets} from "../../mock/tickets.mock";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButton,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatFormField,
    MatInput,
    MatLabel,
    MatSuffix,
    MatSelect,
    MatOption,
    NgForOf,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [MatDatepickerModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  id: number;

  constructor(private activatedRoute: ActivatedRoute, public userFacade: UserFacade) {
    this.id = activatedRoute.snapshot.params["id"];
  }
  userForm: FormGroup = new FormGroup({
    id: new FormControl({value: null, disabled: true}, Validators.required),
    login: new FormControl(null, Validators.required),
    name: new FormControl(null, Validators.required),
    surname: new FormControl(null, Validators.required),
    date: new FormControl(null, Validators.required),
    city: new FormControl(null, Validators.required),
  });

  cities = ['Moscow', 'Saint-Petersburg', 'Vladivostok', 'Krasnoyarsk', 'Omsk', 'Kazan'];

  ngOnInit() {
    this.userFacade.user$.subscribe((data: any) => this.userForm.patchValue(data))
  }
  editUser() {
    const userFormRes = this.userForm.getRawValue();
    this.userFacade.editUser(userFormRes);
  }
}
