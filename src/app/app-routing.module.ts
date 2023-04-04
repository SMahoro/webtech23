import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";
import {AdminboardComponent} from "./adminboard/adminboard.component";
import {UserboardComponent} from "./userboard/userboard.component";


const routes: Routes = [
  { path: 'register',
   component: RegisterComponent},
   
  { path: 'login',
   component: LoginComponent},
  {
    path: "home",
    component: HomeComponent,
    pathMatch: 'full'
  },
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
  { path: 'profile', component: ProfileComponent},
  { path: 'admin', component: AdminboardComponent},
  { path: 'user', component: UserboardComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
