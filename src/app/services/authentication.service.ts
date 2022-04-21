import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
  }

  authenticate(username, password) {

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
    return this.http.get('http://localhost:86/basicauth', {headers}).pipe(
      map (userData => {
      sessionStorage.setItem('username', username);
      sessionStorage.setItem('password', password);
      let authString = 'Basic ' + btoa(username + ':' + password);
      sessionStorage.setItem('basicauth', authString);
      console.log(username + " " + password);
      return userData;
    }));


    /* if (username === "amine" && password === "1234") {
       sessionStorage.setItem('username', username)
       return true;
     } else {
       return false;
     }*/
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}


