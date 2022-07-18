import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/services/api.service';
import { LoginService } from 'src/app/services/login.service';
import { Habilidades } from 'src/models/Habilidades';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  formulario:FormGroup
faPlus=faPlus
login:boolean=false;
  @Output() habilidad:Habilidades[]

  constructor(private loginService:LoginService, private apiService:ApiService) {
    this.formulario=new FormGroup({
      titulo:new FormControl ('', Validators.required),
      descripcion:new FormControl ('', Validators.required),
      porcentaje:new FormControl ('', Validators.required),
    })
   }

  ngOnInit(): void {
    this.loginService.subjectLogin.subscribe(log=>{
      this.login=log;
    })
    this.apiService.habilidadSubject.subscribe(e=>{
      this.habilidad=e;
    })
    this.apiService.getHabilidades();
  }
  eliminar(e:any):void{
    for(let i=0;i<this.habilidad.length;i++){
      if(this.habilidad[i].id==e){
        this.habilidad.splice(i,1);
      }
    }
  }
  submithabilidad(): void{
    let hab:Habilidades=new Habilidades
    hab.titulo =this.formulario.get('titulo')?.value
    hab.descripcion=this.formulario.get('descripcion')?.value
    hab.porcentaje=this.formulario.get('porcentaje')?.value
    this.habilidad.push(hab)
  }
}
