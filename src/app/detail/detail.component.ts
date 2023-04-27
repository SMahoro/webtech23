import { Component } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import {AuthService} from "../shared/auth.service";
import {Appointment} from "../shared/appointment";
import { Router} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  id: string = '';
  appointment!: Appointment;
  detailForm = new UntypedFormGroup({
    datum: new UntypedFormControl('', [Validators.required]),
    termin: new UntypedFormControl('', [Validators.required]),

  });

  constructor(
    private auth: AuthService, private router: Router) {}
  onsubmit() {
    const values = this.detailForm.value;
    this.appointment= {
      id: values.id!,
      datum: values.datum!,
      termin: values.termin!,
    };
    console.log(this.appointment)
    this.auth. addAppointment(this.appointment).subscribe({
      next:(response) => {
        console.log('response', response)
        this.appointment = response;
        this.auth. addAppointment(this.appointment)
        this.router.navigate(['/table'])
      },
      //error: (err) => {
      //console.log('error', err.error.error)

      // },
      complete: () => console.log('Hinzüfugen Erfolgreich!')
    });

  }
}
