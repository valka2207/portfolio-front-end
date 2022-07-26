import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { ApiService } from 'src/app/services/api.service';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from 'src/models/Usuario';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  faEdit=faEdit
  urlbanner:string //="assets/herramientas3.jpeg"
  login:boolean=false;
  user:Usuario

  constructor(private loginService:LoginService, private apiService:ApiService) { }

  ngOnInit(): void {
    this.loginService.subjectLogin.subscribe(log=>{
      this.login=log;
    })
    this.apiService.ususarioSubject.subscribe(e=>{
      this.urlbanner=e[0].urlBanner;
      this.user=e[0];
    })
    this.apiService.getUsuario();
  }
  submitbanner(url:string){
    this.urlbanner=url;
    this.user.urlBanner=url;
    this.apiService.postUsuario(this.user);
  }

}
