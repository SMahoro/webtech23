import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthModel} from "./auth-model";
import {Observable} from "rxjs";

@Injectable({providedIn: "root"})
export class AuthService{
  constructor(private http: HttpClient) {}
    signupUser (username: String, password: String){
    const authData: AuthModel= {username: username, password:password}
      this.http.post('http://localhost:3000/signup', authData).subscribe(res => {
      console.log(res);
      })
    }

  loginUser(username: String, password: String) //: Observable<any>
  {
    //return
    this.http.post('http://localhost:3000/login',
      {username:username, password:password}).subscribe(res =>{
        console.log(res);
    })
      //{observe: 'response'})
  }
}

// Login
/*
sign in user function. use post. url =.../signin -> and then .subscribe
 */
