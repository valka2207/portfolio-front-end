import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/services/api.service';
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
  @Output() educacion: Educacion[];

  formulario: FormGroup
  login: boolean = false;

  constructor(private loginService: LoginService, private apiService:ApiService) {
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
    this.apiService.educacionSubject.subscribe(e=>{
      this.educacion=e;
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
