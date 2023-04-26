import { Component, OnInit } from '@angular/core';
import {Appointment} from "../shared/appointment";
import {AuthService} from "../shared/auth.service";
//import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  id: string = '';
  appointment!: Appointment[];
  deleted = false;
  constructor(private auth: AuthService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.readAll();
  }

  readAll(): void {
    this.auth.getAllAppointment().subscribe(
      {
        next: (response) => {
          this.appointment = response;
          console.log('this.appointment', this.appointment);
          //return this.appointment;
        },
        error: (err) => console.log(err),
        complete: () => console.log('getAll() completed')
      })
  }

  delete(id: string): void {
    this.auth.deleteOne(id).subscribe(
      {
        next: (response: any) => {
          console.log('response : ', response);
          if(response.status == 204){
                  console.log(response.status);
                  this.reload(true);
                } else {
                  console.log(response.status);
                  console.log(response.error);
                  this.reload(false);
                }
        },
        error: (err) => console.log(err),
        complete: () => console.log('deleteOne() completed')
    });
  }

  reload(deleted: boolean)
  {
    this.deleted = deleted;
    this.readAll();
    this.router.navigateByUrl('/table');
  }
}

