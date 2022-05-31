import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  descripcion:string="Soy estudiante de Artes Visuales y Full-Stack Developer jr. Elaboro composiciones artísticas para el público general, mostrando que no existen obstáculos para explorar la creatividad y teniendo en cuenta los criterios visuales más el buen uso de las herramientas disponibles,podemos incentivar y desarrollar habilidades y capacidades que existen dentro de cada persona."
  faEdit=faEdit
  login:boolean=false;
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.loginService.subjectLogin.subscribe(log=>{
      this.login=log;
    })
    this.login=this.loginService.getLogin()
  }
  submitdesc(desc:string){
    this.descripcion=desc;
  }
}
