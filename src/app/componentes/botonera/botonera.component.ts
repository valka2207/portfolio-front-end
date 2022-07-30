import { Component, OnInit } from '@angular/core';
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.css']
})
export class BotoneraComponent implements OnInit {

  faArrow=faCircleArrowUp
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
  }
  educacion(){
    this.apiService.getEducacion();
  }
  experiencia(){
    this.apiService.getExperiencia();
  }
  habilidades(){
    this.apiService.getHabilidades();
  }
  proyectos(){
    this.apiService.getProgramacion();
    this.apiService.getProyectoA();
  }
}
