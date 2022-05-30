import { Component, OnInit, Output } from '@angular/core';
import { ProyectoA } from 'src/models/ProyectoA';

@Component({
  selector: 'app-nuevoartistico',
  templateUrl: './nuevoartistico.component.html',
  styleUrls: ['./nuevoartistico.component.css']
})
export class NuevoartisticoComponent implements OnInit {
  @Output() obras:ProyectoA[]=[
    {id:1,
    url: "assets/Otoño.png",
    titulo:"Serie; \"Sophia's\"",
    descripcion:"ilustracion digital, tamaño: 15cm x 10cm" 
  },
  {id:2,
    url: "assets/TP5_Carranza1_.jpg",
    titulo:"Retrato: \"Olga\"",
    descripcion:"ilustracion digital, tamaño: 15cm x 10cm" 
  },
  {id:3,
    url: "assets/sirena-firma.jpg",
    titulo:"Collage",
    descripcion:"ilustracion digital, tamaño: 15cm x 10cm" 
  }

]

  constructor() { }

  ngOnInit(): void {
  }
  eliminar(e:any):void{
    for(let i=0;i<this.obras.length;i++){
      if(this.obras[i].id==e){
        this.obras.splice(i,1);
      }
    }
  }
}
