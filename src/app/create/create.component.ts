import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/auth.service";
import { ActivatedRoute} from "@angular/router";
import {Appointment} from "../shared/appointment";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  appointment!: Appointment;
  id: string = '';
  createForm = new FormGroup({
    termin : new FormControl<string>(''),
    datum: new FormControl<string>(''),
  });
  constructor(private auth: AuthService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id= this.route.snapshot.paramMap.get('id') || '';
    this.readOne(this.id);
  }

  readOne(id: string): void {
    this.auth.getOne(id).subscribe(
      {
        next: (response: Appointment) => {
          this.appointment = response;
          console.log(this.appointment);
          this.createForm.patchValue({
            termin: this.appointment?.termin,
            datum: this.appointment?.datum,
          })
          return this.appointment;
        },
        error: (err) => console.log(err),
        complete: () => console.log('getOne() completed')
      });
  }

  update(): void {

  }

  cancel(): void {

  }


}
