import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/services/api.service';
import { LoginService } from 'src/app/services/login.service';
import { Habilidades } from 'src/models/Habilidades';

@Component({
  selector: 'app-nuevahabilidad',
  templateUrl: './nuevahabilidad.component.html',
  styleUrls: ['./nuevahabilidad.component.css']
})
export class NuevahabilidadComponent implements OnInit {
@Input() habilidad:Habilidades
@Output() eliminar:EventEmitter<number>=new EventEmitter;
formulario:FormGroup
faEdit=faEdit
faEliminar=faTrash
login:boolean=false;
  constructor(private loginService:LoginService, private apiService:ApiService) {
    this.formulario=new FormGroup({
      titulo:new FormControl ('', Validators.required),
      descripcion:new FormControl ('', Validators.required),
      porcentaje:new FormControl ('', Validators.required),
    })
   }
  ngOnInit(): void {
    this.loginService.subjectLogin.subscribe(log=>{
      this.login=log;
    })
    this.login=this.loginService.getLogin();
  }
  eliminarhabilidad(): void{
    this.eliminar.emit(this.habilidad.id);
  }

  editarhabilidad(): void{
    this.formulario.get('titulo')?.setValue(this.habilidad.titulo)
    this.formulario.get('descripcion')?.setValue(this.habilidad.descripcion)
    this.formulario.get('porcentaje')?.setValue(this.habilidad.porcentaje)
  } 

  submithabilidad(): void{
    this.habilidad.titulo =this.formulario.get('titulo')?.value
    this.habilidad.descripcion=this.formulario.get('descripcion')?.value
    this.habilidad.porcentaje=this.formulario.get('porcentaje')?.value
    this.apiService.postHabilidad(this.habilidad)
  }

}
