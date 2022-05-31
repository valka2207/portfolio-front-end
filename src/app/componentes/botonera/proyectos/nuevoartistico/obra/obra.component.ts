import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/services/login.service';
import { ProyectoA } from 'src/models/ProyectoA';

@Component({
  selector: 'app-obra',
  templateUrl: './obra.component.html',
  styleUrls: ['./obra.component.css']
})
export class ObraComponent implements OnInit {
  @Input() obra:ProyectoA
  @Output() eliminar:EventEmitter<number>=new EventEmitter;
  formulario:FormGroup
  faEdit=faEdit
  faEliminar=faTrash
  login:boolean=false;
  constructor(private loginService:LoginService) {
    this.formulario=new FormGroup({
      url:new FormControl ('', Validators.required),
      titulo:new FormControl ('', Validators.required),
      descripcion:new FormControl ('', Validators.required)
    })
   }

  ngOnInit(): void {
    this.loginService.subjectLogin.subscribe(log=>{
      this.login=log;
    })
    this.login=this.loginService.getLogin()
  }
  eliminarobra(): void{
    this.eliminar.emit(this.obra.id);
  }

  editarobra(): void{
    this.formulario.get('url')?.setValue(this.obra.url)
    this.formulario.get('titulo')?.setValue(this.obra.titulo)
    this.formulario.get('descripcion')?.setValue(this.obra.descripcion)
  } 

  submitobra(): void{
    this.obra.url=this.formulario.get('url')?.value
    this.obra.titulo=this.formulario.get('titulo')?.value
    this.obra.descripcion=this.formulario.get('descripcion')?.value
  }
}
