import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  descripcion:string="Soy estudiante de Artes Visuales y Full-Stack Developer jr. Elaboro composiciones artísticas para el público general, mostrando que no existen obstáculos para explorar la\ncreatividad y teniendo en cuenta los criterios visuales más el buen uso de las herramientas disponibles,podemos incentivar y\ndesarrollar habilidades y capacidades que existen dentro de cada persona."
  faEdit=faEdit
  constructor() { }

  ngOnInit(): void {
  }
  submitdesc(desc:string){
    this.descripcion=desc;
  }
}
