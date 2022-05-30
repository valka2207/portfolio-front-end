import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progreso-circular',
  templateUrl: './progreso-circular.component.html',
  styleUrls: ['./progreso-circular.component.css']
})
export class ProgresoCircularComponent implements OnInit {

  @Input() valor:number=0;
  @Input() frente:string="";
  @Input() fondo:string="";
  

  constructor() { }

  ngOnInit(): void {
    
  }

}
