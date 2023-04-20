import { NgModule } from '@angular/core';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [],
  imports: [
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
