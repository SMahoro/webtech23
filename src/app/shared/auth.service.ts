import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
import {User} from "./user";
import {Appointment} from "./appointment";


@Injectable
({providedIn: "root"})

export class AuthService{
  user: User = {username: '', password: ''};
  //appointment: Appointment = { datum:'', termin: ''};

  userChange: Subject<User> = new Subject<User>();
  loggedIn = false;
  //delete= false;
  loggedInChange: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient) {
    this.loggedInChange.subscribe((value) => {
      this.loggedIn = value
    });
    this.userChange.subscribe((value) => {
      this.user = value
    });
  }


  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>('http://localhost:3000/users');
  }

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

  addAppointment(appointment:Appointment): Observable<any>
  {
    return this.http.post('http://localhost:3000/appointment', appointment);
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
/*
  addAppointment(appointment:Appointment): Observable<Appointment>{
    return this.http.post<Appointment>('http://localhost:3000/appointment', appointment);
  }
*/
  getAllAppointment(): Observable<Appointment[]>{
    return this.http.get<Appointment[]>('http://localhost:3000/table');
    //return this.http.get<Appointment[]>('http://localhost:3000/table',{ withCredentials: true });
  }

  deleteOne(id: string): Observable<any>{
    return this.http.delete<any>('http://localhost:3000/table/'+ id, {observe: 'response'});
  }

  getOne(id: string): Observable<Appointment>{
    return this.http.get<Appointment>('http://localhost:3000/table' + id);
  }

  update(id: string, data: Appointment): Observable<Appointment> {
    return this.http.patch<Appointment>('http://localhost:3000/table/'+ id, data);
  }



}



// Login
/*
sign in user function. use post. url =.../signin -> and then .subscribe
 */
