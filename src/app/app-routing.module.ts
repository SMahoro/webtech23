import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";


const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    pathMatch: 'full'
  },

  {path: "signup", component:SignupComponent},

  {path: "login", component:LoginComponent},

  {
    path: "table",
    component: TableComponent
  },
  {
    path: "appointment",
    component: DetailComponent
  },
  {
    path: "appointment/:id",
    component: CreateComponent
  },

  {path: '', redirectTo: 'home', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
