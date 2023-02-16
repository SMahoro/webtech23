import { Component, OnInit } from '@angular/core';
import { BackendService } from './shared/backend.service';
import { Appointment } from './shared/appointment';

@Component({
  selector: 'app-table',
  templateUrl: './table/table.component.html',
  styleUrls: ['./table/table.component.css']
})
export class TableComponent implements OnInit {
    appointments!: Appointment[];

  constructor(private bs: BackendService) { }

  ngOnInit(): void {
    this.readAll();
  }

  readAll(): void {
    this.bs.getAll().subscribe(
          {
            next: (response) => {
                  this.appointments = response;
                  console.log(this.appointments);
                  return this.appointments;
                },
            error: (err) => console.log(err),
            complete: () => console.log('getAll() completed')
          })
  }
}
