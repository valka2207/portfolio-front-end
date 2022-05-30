import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Educacion } from 'src/models/Educacion';

@Component({
  selector: 'app-nuevaeducacion',
  templateUrl: './nuevaeducacion.component.html',
  styleUrls: ['./nuevaeducacion.component.css']
})
export class NuevaeducacionComponent implements OnInit {
  @Input() educacion:Educacion
  @Output() eliminar:EventEmitter<number>=new EventEmitter;
  formulario:FormGroup
  faEdit=faEdit
  faEliminar=faTrash
  constructor() {
    this.formulario=new FormGroup({
      institucion:new FormControl ('', Validators.required),
      fechadeinicio:new FormControl ('', Validators.required),
      fechadeegreso:new FormControl ('', Validators.required),
      titulo:new FormControl ('', Validators.required),
      porcentaje:new FormControl ('', Validators.required)
    })
   }

  ngOnInit(): void {
  }
  eliminareducacion(): void{
    this.eliminar.emit(this.educacion.id);
  }

  editareducacion(): void{
    this.formulario.get('institucion')?.setValue(this.educacion.institucion)
    this.formulario.get('fechadeinicio')?.setValue(this.educacion.fechadeinicio)
    this.formulario.get('fechadeegreso')?.setValue(this.educacion.fechadeegreso)
    this.formulario.get('titulo')?.setValue(this.educacion.titulo)
    this.formulario.get('porcentaje')?.setValue(this.educacion.porcentaje)
  } 

  submiteducacion(): void{
    this.educacion.institucion=this.formulario.get('institucion')?.value
    this.educacion.fechadeinicio=this.formulario.get('fechadeinicio')?.value
    this.educacion.fechadeegreso=this.formulario.get('fechadeegreso')?.value
    this.educacion.titulo=this.formulario.get('titulo')?.value
    this.educacion.porcentaje=this.formulario.get('porcentaje')?.value
  }

}
