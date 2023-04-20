import { Component } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { Appointment } from '../../../shared/appointment';
import {AuthService} from "../shared/auth.service";

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
  }
}
