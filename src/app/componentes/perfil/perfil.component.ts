import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { ApiService } from 'src/app/services/api.service';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from 'src/models/Usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  faEdit=faEdit
  urlperfil:string 
  login:boolean=false;
  user:Usuario

  constructor(private loginService:LoginService, private apiService:ApiService) { }
  ngOnInit(): void {
    this.loginService.subjectLogin.subscribe(log=>{
      this.login=log;
    })
    this.apiService.ususarioSubject.subscribe(e=>{
      this.urlperfil=e[0].urlFoto;
      this.user=e[0];
    })
    this.apiService.getUsuario();
  }
  submitperfil(url:string){
    this.urlperfil=url
    this.user.urlFoto=url
    this.apiService.postUsuario(this.user)
  }

}
