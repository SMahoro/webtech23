import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import  {AuthService} from "../shared/auth-service";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  hide = true;
  signupForm: FormGroup

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.signupForm = new  FormGroup({
      'username': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  onSubmit(){
    this.authService.signupUser(this.signupForm.value.username, this.signupForm.value.password);
  }
}
