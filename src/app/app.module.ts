import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { TableComponent } from './table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MainComponent} from "./main/main.component";
import {FormsModule} from "@angular/forms";
import { NavloginComponent } from './navlogin/navlogin.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    TableComponent,
    HomeComponent,
    DetailComponent,
    CreateComponent,
<<<<<<< HEAD
    MainComponent

=======
    LoginComponent,
    MainComponent,
    RegisterComponent,
    AdminboardComponent,
    UserboardComponent,
    ProfileComponent,
    NavloginComponent,
    LogoutComponent
>>>>>>> 6d3f09493ae9ac14b120f2ab9aef801afccc4324
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
