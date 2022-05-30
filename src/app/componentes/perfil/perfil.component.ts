import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  faEdit=faEdit
  urlperfil:string="assets/Anahi Polaroid.png"
  constructor() { }
  ngOnInit(): void {
  }
  submitperfil(url:string){
    this.urlperfil=url
  }

}
