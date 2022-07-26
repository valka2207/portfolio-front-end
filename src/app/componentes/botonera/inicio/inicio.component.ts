import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { ApiService } from 'src/app/services/api.service';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from 'src/models/Usuario';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  descripcion:string //="Soy estudiante de Artes Visuales y Full-Stack Developer jr. Elaboro composiciones artísticas para el público general, mostrando que no existen obstáculos para explorar la creatividad y teniendo en cuenta los criterios visuales más el buen uso de las herramientas disponibles,podemos incentivar y desarrollar habilidades y capacidades que existen dentro de cada persona."
  faEdit=faEdit
  login:boolean=false;
  user:Usuario

  constructor(private loginService:LoginService, private apiService:ApiService) { }

  ngOnInit(): void {
    this.loginService.subjectLogin.subscribe(log=>{
      this.login=log;
    })
    this.login=this.loginService.getLogin()
    this.apiService.ususarioSubject.subscribe(e=>{
      this.descripcion=e[0].descripcion;
      this.user=e[0];
    })
    this.apiService.getUsuario();
  }
  submitdesc(desc:string){
    this.descripcion=desc;
    this.user.descripcion=desc;
    this.apiService.postUsuario(this.user);
  }
}
