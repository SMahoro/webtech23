import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthModel} from "./auth-model";

@Injectable({providedIn: "root"})
export class AuthService{
  constructor(private http: HttpClient) {}
    signupUser (username: String, password: String){
    const authData: AuthModel= {username: username, password:password}
      this.http.post('http://localhost:3000/signup', authData).subscribe(res => {
      console.log(res);
      })
    }
}
