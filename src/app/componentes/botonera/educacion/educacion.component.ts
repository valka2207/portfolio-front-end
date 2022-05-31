import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/services/login.service';
import { Educacion } from 'src/models/Educacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  faPlus=faPlus
  @Output() valores:number[]=[45,55,65];
  @Output() educacion: Educacion[] = [{
    id: 1,
    institucion: "Instituto Almafuerte - Pilar",
    fechadeinicio: "2009",
    fechadeegreso: "2013",
    titulo: "Bachillerato economia-administracion",
    porcentaje: 100
  },
    {
      id: 2,
      institucion: "Universidad Nacional de Arte",
      fechadeinicio: "2008",
      fechadeegreso: "Actualidad",
      titulo: "Profesorado de Artes visuales",
      porcentaje: 60
    },
    {
      id: 3,
      institucion: "Universidad Nacional de San Martin",
      fechadeinicio: "2022",
      fechadeegreso: "Actualidad",
      titulo: "Licenciatura en Ciencia de Datos",
      porcentaje: 5
    }];

  formulario: FormGroup
  login: boolean = false;

  constructor(private loginService: LoginService) {
    this.formulario = new FormGroup({
      institucion: new FormControl('', Validators.required),
      fechadeinicio: new FormControl('', Validators.required),
      fechadeegreso: new FormControl('', Validators.required),
      titulo: new FormControl('', Validators.required),
      porcentaje: new FormControl('', Validators.required)
    })

  }

  ngOnInit(): void {
    this.loginService.subjectLogin.subscribe(log=>{
      this.login=log;
    })
  }
  
  submiteducacion(): void{
    let edu:Educacion=new Educacion
    edu.institucion=this.formulario.get('institucion')?.value
    edu.fechadeinicio=this.formulario.get('fechadeinicio')?.value
    edu.fechadeegreso=this.formulario.get('fechadeegreso')?.value
    edu.titulo=this.formulario.get('titulo')?.value
    edu.porcentaje=this.formulario.get('porcentaje')?.value
    this.educacion.push(edu)
  }

  eliminar(e:any):void{
    for(let i=0;i<this.educacion.length;i++){
      if(this.educacion[i].id==e){
        this.educacion.splice(i,1);
      }
    }
  }
}
