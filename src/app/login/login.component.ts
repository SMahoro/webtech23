import { Component } from '@angular/core';
import {UntypedFormControl, UntypedFormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../shared/auth.service";
import { Router} from "@angular/router";
//import {response} from "express";
//import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  hide = true;

  loginForm=this.fb.group({
    username: new UntypedFormControl(null, [Validators.required]),
    password: new UntypedFormControl(null, [Validators.required])
  });

  constructor(private fb: UntypedFormBuilder, private auth: AuthService, private router: Router) { }

  onsubmit(): void {
    const values = this.loginForm.value;
    const username = values.username;
    const password = values.password;
    console.log('values username', username)
    console.log('values password', password)

    this.auth.loginUser(username!, password!).subscribe({
        next: (response) => {
          console.log('login response', response);
          if (response.status == 201) {
           // this.auth.getOneUser(username!).subscribe(
             // (response) => {
                //this.auth.login(response);
                this.router.navigate(['/table'])
             // }
           // )
          } else {
            console.log('kein Login - Nutzername und/oder Passwort stimmen nicht')
          }
        },
        error: (err) => {
          console.log('login error', err);
        },
        complete: () => console.log('login completed')
    })
  }


    //call the signin on submit. redirect to homepage. use function "Windows...." to be directed to the homepage.

}
