import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { MatMomentDateModule } from '@angular/material-moment-adapter';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMomentDateModule,
    MatDatepickerModule,
    MatButtonModule
  ],
  exports: [
    MatDatepickerModule,
    MatButtonModule
  ]
})
export class CustomMaterialModule { }