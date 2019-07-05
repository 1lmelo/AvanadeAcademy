import { Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private pUser = new BehaviorSubject(null);

  currentUser = this.pUser.asObservable();
  constructor(private httpClinte: HttpClient) { }


login(email, password){
  return this.httpClinte.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDbpB0HkLL588ID8ujuqm_8MLnb63pijU8', {
    email,
    password,
  })
}

createAccount(email, password){
  return this.httpClinte.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDbpB0HkLL588ID8ujuqm_8MLnb63pijU8', {
    email,
    password,
  })
}


verifyToken(token){
  return this.httpClinte.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=AIzaSyDbpB0HkLL588ID8ujuqm_8MLnb63pijU8',{
    idToken: token
  });
}

setUser(){

}


logout(){

}

}