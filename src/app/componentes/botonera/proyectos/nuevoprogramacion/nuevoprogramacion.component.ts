import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/services/api.service';
import { LoginService } from 'src/app/services/login.service';
import { Programacion } from 'src/models/ProyectoP';

@Component({
  selector: 'app-nuevoprogramacion',
  templateUrl: './nuevoprogramacion.component.html',
  styleUrls: ['./nuevoprogramacion.component.css']
})
export class NuevoprogramacionComponent implements OnInit {
  @Input() programacion:Programacion
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
    this.login=this.loginService.getLogin()
  }
  eliminarprogramacion(): void{
    this.eliminar.emit(this.programacion.id);
  }

  editarprogramacion(): void{
    this.formulario.get('titulo')?.setValue(this.programacion.titulo)
    this.formulario.get('descripcion')?.setValue(this.programacion.descripcion)
    this.formulario.get('url')?.setValue(this.programacion.url)
  } 

  submitprogramacion(): void{
    this.programacion.titulo =this.formulario.get('titulo')?.value
    this.programacion.descripcion=this.formulario.get('descripcion')?.value
    this.programacion.url=this.formulario.get('url')?.value
    this.apiService.postProgramacion(this.programacion)
  }

}
