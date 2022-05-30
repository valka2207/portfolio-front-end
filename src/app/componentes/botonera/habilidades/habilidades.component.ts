import { Component, OnInit, Output } from '@angular/core';
import { Habilidades } from 'src/models/Habilidades';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  @Output() habilidad:Habilidades[]=[{id:1,
    titulo:"habilidad 1",
    descripcion:"tareas generales",
    porcentaje: 10
  },
  {id:2,
    titulo:"habilidad 2",
    descripcion:"tareas generales",
    porcentaje: 30
  },
  {id:3,
    titulo:"habilidad 3",
    descripcion:"tareas generales",
    porcentaje: 40
  }
]

  constructor() { }

  ngOnInit(): void {
  }
  eliminar(e:any):void{
    for(let i=0;i<this.habilidad.length;i++){
      if(this.habilidad[i].id==e){
        this.habilidad.splice(i,1);
      }
    }
  }

}
