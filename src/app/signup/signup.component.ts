import {ConfirmComponent} from "./confirm/confirm.component";
import { Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
//import {response} from "express";
import{AuthService} from '../shared/auth.service'
import { MatDialog } from '@angular/material/dialog';
import {User} from "../shared/user";
import {AuthguardGuard} from "../shared/authguard.guard";

export interface DialogData {
  headline: string;
  info: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{
  signupForm = new  UntypedFormGroup({
    'username': new UntypedFormControl('', [Validators.required]),
    'password': new UntypedFormControl('', [Validators.required, Validators.minLength(8)]),
    password2: new UntypedFormControl('', [Validators.required, Validators.minLength(8)])
  });

  hide = true;
  hide2 = true;
  user!: User;

  constructor(private auth: AuthService, public dialog: MatDialog) {}

  onSubmit(): void{
    const values = this.signupForm.value;
    this.user = {
      username: values.username!,
      password: values.password!,
    };
    console.log(this.user)
    this.auth.signupUser(this.user).subscribe({
      next:(response) => {
        console.log('response', response)
        this.user = response;
        this.auth.login(this.user)
        this.openDialog({ headline: "Erfolg", info: "User " + response.username + " registriert!" });
      },
      error: (err) => {
        console.log('error', err.error.error)
        this.openDialog({ headline: "Fehler", info: "Bitte ein gultiges Username eingeben oder username existiert bereits" });
      },
      complete: () => console.log('Registrierung Erfolgreich!')
    });
  }

  openDialog(data: DialogData) {
    this.dialog.open(ConfirmComponent, { data });
  }
}
