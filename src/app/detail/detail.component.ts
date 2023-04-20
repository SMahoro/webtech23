import { Component } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import {AuthService} from "../shared/auth.service";
import {Appointment} from "../shared/appointment";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  id: string = '';
  appointment!: Appointment;
  detailForm = new UntypedFormGroup({
    datum: new UntypedFormControl(''),
    termin: new UntypedFormControl(''),

  });

  constructor(
  private auth: AuthService
  ) {
  }
  onsubmit() {
    const values = this.detailForm.value;
    this.appointment= {
      datum: values.datum!,
      termin: values.termin!,
    };
    console.log(this.appointment)
    this.auth.signupUser(this.appointment).subscribe({
      next:(response) => {
        console.log('response', response)
        this.appointment = response;
      },
      error: (err) => {
        console.log('error', err.error.error)

      },
      complete: () => console.log('Hinzüfugen Erfolgreich!')
    });
  }
}
