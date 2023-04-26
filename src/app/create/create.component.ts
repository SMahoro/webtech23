import { Component, OnInit } from '@angular/core';

/*import {AuthService} from "../shared/auth.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Appointment} from "../shared/appointment";
import { FormGroup, FormControl } from '@angular/forms';
*/
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  //appointment!: Appointment;
  constructor() {}
  //constructor(private auth: AuthService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
/*
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.readOne(this.id); */
  }
/*

  readOne(id: string): void {
    this.auth.getOne(id).subscribe(
      {
        next: (response: Appointment) => {
          this.appointment = response;
          console.log(this.appointment);
          return this.appointment;
        },
        error: (err) => console.log(err),
        complete: () => console.log('getOne() completed')
      });
  }

 */
}
