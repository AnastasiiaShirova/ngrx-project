import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import {MAT_DATE_LOCALE, provideNativeDateAdapter} from "@angular/material/core";
import {DatePipe, NgIf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {Ticket} from "../../../interfaces/ticket.interface";
import {TicketFacade} from "../../services/ticket.facade";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tickets-detail',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule, MatButton, NgIf
  ],
  providers: [provideNativeDateAdapter(), { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }, DatePipe],
  templateUrl: './tickets-detail.component.html',
  styleUrl: './tickets-detail.component.scss'
})
export class TicketsDetailComponent implements OnInit {

  @Input() isDisabled = false;

  constructor(private datePipe: DatePipe, public ticketFacade: TicketFacade, private activatedRoute: ActivatedRoute) {}

  ticketForm: FormGroup = new FormGroup({
    id: new FormControl({value: null, disabled: true}, Validators.required),
    name: new FormControl(null, Validators.required),
    date: new FormControl(null, Validators.required),
    time: new FormControl(null, Validators.required),
  });

  toISOString() {
    let ticketFormData = this.ticketForm.getRawValue();
    let date: Date = new Date(ticketFormData.date);
    let hours = ticketFormData.time.slice(0, 2);
    let minutes = ticketFormData.time.slice(3, 5);
    date.setHours(hours);
    date.setMinutes(minutes);
    return date.toISOString();
  }

  fromISOString(isoString: string) {
    let date: Date = new Date(isoString);
    let time = this.datePipe.transform(date,'HH:mm');

    return this.ticketForm.patchValue({
      date: date,
      time: time,
      }
    )
  }

  ngOnInit() {
    if (!this.isDisabled) {
      const id = this.activatedRoute.snapshot.params["id"];
      this.ticketFacade.loadTicket(+id);
    }

    this.ticketFacade.ticket$.subscribe((data: any) => {
      if (data) {
        this.fromISOString(data.date);
        this.ticketForm.patchValue(data);
        if(this.isDisabled) {
          this.ticketForm.disable();
        }
      }
    })
  }
  editTicket() {
    const ticketFormRes = this.ticketForm.getRawValue();
    this.ticketFacade.editTicket({...ticketFormRes, date: this.toISOString()});
  }
}
