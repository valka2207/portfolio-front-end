import { Component, Input, OnInit } from '@angular/core';
import { ProyectoA } from 'src/models/ProyectoA';

@Component({
  selector: 'app-obra',
  templateUrl: './obra.component.html',
  styleUrls: ['./obra.component.css']
})
export class ObraComponent implements OnInit {
  @Input() obra:ProyectoA
  constructor() { }

  ngOnInit(): void {
  }

}
