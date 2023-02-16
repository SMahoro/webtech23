import { Component, OnInit } from '@angular/core';
import { BackendService } from '../shared/backend.service';
import { Appointment } from '../shared/member';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  appointment!: Appointment[];
  constructor(private bs: BackendService) { }

  ngOnInit(): void {
    this.readAll();
  }

  readAll(): void {
    this.bs.getAll().subscribe(
      {
        next: (response) => {
              this.appointment = response;
              console.log(this.appointment);
              return this.appointment;
            },
        error: (err) => console.log(err),
        complete: () => console.log('getAll() completed')
      })
  }

  delete(id: string): void {
    console.log("id :" ,id );
  }
}
