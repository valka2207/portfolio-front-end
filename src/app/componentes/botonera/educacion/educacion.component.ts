import { Component, OnInit, Output } from '@angular/core';
import { Educacion } from 'src/models/Educacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  @Output() valores:number[]=[45,55,65];
  @Output() educacion:Educacion[]=[{id:1,
    institucion:"Instituto Almafuerte - Pilar",
    fechadeinicio:"2009",
    fechadeegreso:"2013",
    titulo:"Bachillerato economia-administracion",
    porcentaje:100},
    {id:2,
      institucion:"Universidad Nacional de Arte",
      fechadeinicio:"2008",
      fechadeegreso:"Actualidad",
      titulo:"Profesorado de Artes visuales",
      porcentaje:60
    },
      {id:3,
        institucion:"Universidad Nacional de San Martin",
        fechadeinicio:"2022",
        fechadeegreso:"Actualidad",
        titulo:"Licenciatura en Ciencia de Datos",
        porcentaje:5}];
  constructor() { }

  ngOnInit(): void {
  }

  eliminar(e:any):void{
    for(let i=0;i<this.educacion.length;i++){
      if(this.educacion[i].id==e){
        this.educacion.splice(i,1);
      }
    }
  }
}
