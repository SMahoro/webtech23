import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
import {User} from "./user";
import {Appointment} from "./appointment";


@Injectable
({providedIn: "root"})

export class AuthService{
  user: User = {username: '', password: ''};
  appointment: Appointment ={datum:'', termin: ''}

  userChange: Subject<User> = new Subject<User>();
  loggedIn = false;
  loggedInChange: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient) {
    this.loggedInChange.subscribe((value) => {
      this.loggedIn = value
    });
    this.userChange.subscribe((value) => {
      this.user = value
    });
  }

  /*
  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>('http://localhost:3000/users');
  }
*/
  getOneUser(username: string): Observable<User>{
    return this.http.get<User>('http://localhost:3000/users/' + username);
  }

  signupUser (user:User): Observable<any>{
    return this.http.post('http://localhost:3000/signup', user);
  }

  loginUser(username: String, password: String) //: Observable<any>
  {
    return this.http.post('http://localhost:3000/login',
      {username:username, password:password}, {observe: 'response'});
  }

  addDate(datum: string, termin: string)

  {
    return this.http.post('http://localhost:3000/appointment', this.appointment);
  }

  isLoggedin(): boolean {
    return this.loggedIn;
  }

  login(user: User): void {
    this.loggedIn = true
    this.loggedInChange.next(this.loggedIn);
    this.user = user;
    this.userChange.next(this.user);
    console.log('login() : ', this.user);
  }

  logout(): void {
    this.loggedIn = false;
    this.loggedInChange.next(this.loggedIn);
    this.user = {username: '', password: ''};
    this.userChange.next(this.user);
  }

  getUser(): User | null {
    return this.user;
  }

}

// Login
/*
sign in user function. use post. url =.../signin -> and then .subscribe
 */
