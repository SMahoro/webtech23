import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/auth-service";
import { Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'username': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required])
    }
    )
  }
  onsubmit() {
    this.authService.loginUser(this.loginForm.value.username, this.loginForm.value.password)
    {
      this.router.navigate(['/home'])  // if login true -> redirect to homepage
    }
  }


    //call the signin on submit. redirect to homepage. use function "Windows...." to be directed to the homepage.

}
