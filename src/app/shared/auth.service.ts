import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import {User} from "./user";

@Injectable
({providedIn: "root"})

export class AuthService{

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>('http://localhost:3000/users');
  }

  signupUser (user:User): Observable<any>{
    return this.http.post('http://localhost:3000/signup', user);
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
