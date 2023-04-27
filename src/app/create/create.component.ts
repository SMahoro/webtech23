import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/auth.service";
import { ActivatedRoute, Router} from "@angular/router";
import {Appointment} from "../shared/appointment";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Location } from '@angular/common';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  appointment!: Appointment;
  id: string = '';
  createForm = new FormGroup({
    termin : new FormControl('', [Validators.required]),
    datum: new FormControl('', [Validators.required]),
  });
  constructor(private auth: AuthService, private route: ActivatedRoute,  private location: Location, private router: Router) {}

  ngOnInit(): void {
    this.id= this.route.snapshot.paramMap.get('id') || '';
    this.readOne(this.id);
  }

  readOne(id: string): void {
    this.auth.getOne(id).subscribe(
      {
        next: (response: Appointment) => {
          this.appointment = response;
          console.log('appointment',this.appointment);
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
    const values = this.createForm.value;
    this.appointment.termin= values.termin!;
    this.appointment.datum= values.datum!;
    this.auth.update(this.id, this.appointment)
      .subscribe({
          next: (response) => {
            console.log(response);
            console.log(response.id);
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


}
