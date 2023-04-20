import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../../../shared/backend.service';
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
  /*

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.readOne(this.id);

  }


  readOne(id: string): void {
    this.bs.getOne(id).subscribe(
      {
        next: (response) => {
          this.appointment = response;
          console.log('appointment', this.appointment);
          this.form.patchValue({
            datumControl: this.appointment?.datum,
            terminontrol: this.appointment?.termin,

          })
          return this.appointment;
        },
        error: (err) => console.log(err),
        complete: () => console.log('getOne() completed')
      });

  }

  update(): void {
    const values = this.form.value;
    this.appointment.datum = values.datumControl!;
    this.appointment.termin = values.terminControl!;
    this.bs.update(this.id, this.appointment)
      .subscribe({
          next: (response) => {
            console.log(response);
            console.log(response._id);
          },
          error: (err) => {
            console.log(err);
          },
          complete: () => console.log('update() completed')
        }
      );
    this.router.navigateByUrl('/table');
  }

  cancel(): void {
    this.location.back();
  }
*/
  onsubmit() {

  }

}
