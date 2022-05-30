import { Component, OnInit, Output } from '@angular/core';
import { Experiencia } from 'src/models/Experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  @Output() experiencia:Experiencia[]=[{id:1,
    url:"",
    empresa:"Minix - Salon de juego",
    puesto:"Animadora de eventos",
    fechadeinicio:"2018",
    fechadeegreso:"2019",
    descripcion:"tareas generales"
  },
    {id:2,
      url:"assets/casimiro.png",
      empresa:"Casimiro - Restaurant",
      puesto:"Animadora de eventos",
      fechadeinicio:"2016",
      fechadeegreso:"2017",
      descripcion:"breve descripcion"    
    },
      {id:3,
        url:"assets/logo-mostaza-.jpg",
        empresa:"Mostaza S.A.",
        puesto:"Atencion al publico",
        fechadeinicio:"2015",
        fechadeegreso:"2016",
        descripcion:"tareas generales"}];
  constructor() { }

  ngOnInit(): void {
  }
  eliminar(e:any):void{
    for(let i=0;i<this.experiencia.length;i++){
      if(this.experiencia[i].id==e){
        this.experiencia.splice(i,1);
      }
    }
  }

}
