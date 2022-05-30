import { Component, OnInit, Output } from '@angular/core';
import { Programacion } from 'src/models/ProyectoP';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  @Output() programacion:Programacion[]=[
  {id:1,
  url:"assets/logoproyec.png",
  titulo:"Portfolio",
  descripcion:"With supporting text below as a natural lead-in to additional content. segunda prueba aca vamos a escribir algo para probar definitivamente tiene que haber un minimo de caraceteres para realizarprobando probando"
  }]
  constructor() { }

  ngOnInit(): void {
  }
  eliminar(e:any):void{
    for(let i=0;i<this.programacion.length;i++){
      if(this.programacion[i].id==e){
        this.programacion.splice(i,1);
      }
    }
  }
}
