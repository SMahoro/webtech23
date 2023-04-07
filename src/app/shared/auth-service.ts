import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable({providedIn: "root"})
export class AuthService{
  constructor(private http: HttpClient) {}
    signupUser (username: String, password: String){
      this.http.post('http://localhost:3000/signup', {username: username, password:password}).subscribe(res => {
      console.log(res);
      })
    }

  loginUser(username: String, password: String) //: Observable<any>
  {
    this.http.post('http://localhost:3000/login',
      {username:username, password:password}).subscribe(res =>{
        console.log(res);
    })
  }
}

// Login
/*
sign in user function. use post. url =.../signin -> and then .subscribe
 */
