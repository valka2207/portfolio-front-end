import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  faEdit=faEdit
  urlperfil:string="assets/Anahi Polaroid.png"
  login:boolean=false;
  constructor(private loginService:LoginService) { }
  ngOnInit(): void {
    this.loginService.subjectLogin.subscribe(log=>{
      this.login=log;
    })
  }
  submitperfil(url:string){
    this.urlperfil=url
  }

}
