import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient, private router: Router) { }
  loggedIn = false;
  path = environment.apiUrl + '/users';
  login(user: User) {
    this.authenticate(user).subscribe(data => {
      if(data.response == "true"){
        this.loggedIn = true;
        localStorage.setItem('logged', JSON.stringify(user))
        this.router.navigate(['/books']);
      } else {
        this.loggedIn = false;
      }
    })
  }

  authenticate(user: User) {
    return this.http.get<any>(this.path + '/authenticate/?username=' + user.username + '&password=' + user.password)
           .pipe(
             catchError(this.handleError)
           )
  }

  handleError(err: HttpErrorResponse){
    let errorMessage = "";
    if(err.error instanceof ErrorEvent){
      errorMessage = 'An error occured.' + err.error.message;
    } else {
      errorMessage = 'Error!';
    }
    return throwError(errorMessage);
  }
  isLoggedIn(): boolean {
    if(localStorage.getItem('logged') !== null)
    {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
    return this.loggedIn;
  }
  logout() {
    localStorage.removeItem('logged');
    this.router.navigate(['/login']);
  }
}
