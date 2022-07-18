import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/services/api.service';
import { LoginService } from 'src/app/services/login.service';
import { Experiencia } from 'src/models/Experiencia';

@Component({
  selector: 'app-nuevaexperiencia',
  templateUrl: './nuevaexperiencia.component.html',
  styleUrls: ['./nuevaexperiencia.component.css']
})
export class NuevaexperienciaComponent implements OnInit {
  @Input() experiencia:Experiencia
  @Output() eliminar:EventEmitter<number>=new EventEmitter;
  formulario:FormGroup
  faEdit=faEdit
  faEliminar=faTrash
  login:boolean=false;
  constructor(private loginService:LoginService, private apiService:ApiService) { 
    this.formulario=new FormGroup({
      url:new FormControl ('', Validators.required),
      empresa:new FormControl ('', Validators.required),
      fechadeinicio:new FormControl ('', Validators.required),
      fechadeegreso:new FormControl ('', Validators.required),
      puesto:new FormControl ('', Validators.required),
      descripcion:new FormControl ('', Validators.required)
    })
  }

  ngOnInit(): void {
    this.loginService.subjectLogin.subscribe(log=>{
      this.login=log;
    })
    this.login=this.loginService.getLogin()
  }
  eliminarexperiencia(): void{
    this.eliminar.emit(this.experiencia.id);
  }

  editarexperiencia(): void{
    this.formulario.get('institucion')?.setValue(this.experiencia.url)
    this.formulario.get('fechadeinicio')?.setValue(this.experiencia.fechadeinicio)
    this.formulario.get('fechadeegreso')?.setValue(this.experiencia.fechadeegreso)
    this.formulario.get('empresa')?.setValue(this.experiencia.empresa)
    this.formulario.get('puesto')?.setValue(this.experiencia.puesto)
    this.formulario.get('descripcion')?.setValue(this.experiencia.descripcion)
  } 

  submitexperiencia(): void{
    this.experiencia.url =this.formulario.get('url')?.value
    this.experiencia.fechadeinicio=this.formulario.get('fechadeinicio')?.value
    this.experiencia.fechadeegreso=this.formulario.get('fechadeegreso')?.value
    this.experiencia.empresa=this.formulario.get('empresa')?.value
    this.experiencia.puesto=this.formulario.get('puesto')?.value
    this.experiencia.descripcion=this.formulario.get('descripcion')?.value
    this.apiService.postExperiencia(this.experiencia)
  }

}
