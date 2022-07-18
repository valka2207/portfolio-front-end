import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private login:boolean=false;
  private user:string="anahi"
  private password:string="carranza"
  subjectLogin:Subject<boolean>=new Subject;

  constructor(private apiService:ApiService) { }

  getLogin():boolean{
    return this.login;
  }

  submitlogin(user:string,pass:string):void{
    if(this.user==user&&this.password==pass)
    {
      this.login=true;
      this.subjectLogin.next(true);
    }
  }
  setLogout(): void{
    this.login=false
    this.subjectLogin.next(false)
  }
}
