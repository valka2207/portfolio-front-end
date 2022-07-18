import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { ApiService } from 'src/app/services/api.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  faEdit=faEdit
  urlperfil:string //="assets/Anahi Polaroid.png"
  login:boolean=false;
  constructor(private loginService:LoginService, private apiService:ApiService) { }
  ngOnInit(): void {
    this.loginService.subjectLogin.subscribe(log=>{
      this.login=log;
    })
    this.apiService.ususarioSubject.subscribe(e=>{
      this.urlperfil=e[0].urlFoto;
    })
    this.apiService.getUsuario();
  }
  submitperfil(url:string){
    this.urlperfil=url
  }

}
