import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  faEdit=faEdit
  urlbanner:string="assets/herramientas3.jpeg"
  login:boolean=false;

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.loginService.subjectLogin.subscribe(log=>{
      this.login=log;
    })
  }
  submitbanner(url:string){
    this.urlbanner=url
  }

}
