import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { ApiService } from 'src/app/services/api.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  faEdit=faEdit
  urlbanner:string //="assets/herramientas3.jpeg"
  login:boolean=false;

  constructor(private loginService:LoginService, private apiService:ApiService) { }

  ngOnInit(): void {
    this.loginService.subjectLogin.subscribe(log=>{
      this.login=log;
    })
    this.apiService.ususarioSubject.subscribe(e=>{
      this.urlbanner=e[0].urlBanner;
    })
    this.apiService.getUsuario();
  }
  submitbanner(url:string){
    this.urlbanner=url
  }

}
