import { Component, Input, OnInit } from '@angular/core';
import { Programacion } from 'src/models/ProyectoP';

@Component({
  selector: 'app-nuevoprogramacion',
  templateUrl: './nuevoprogramacion.component.html',
  styleUrls: ['./nuevoprogramacion.component.css']
})
export class NuevoprogramacionComponent implements OnInit {
  @Input() programacion:Programacion
  constructor() { }

  ngOnInit(): void {
  }

}
