import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/services/login.service';
import { Programacion } from 'src/models/ProyectoP';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  @Output() programacion:Programacion[]=[
  {id:1,
  url:"assets/logoproyec.png",
  titulo:"Portfolio",
  descripcion:"With supporting text below as a natural lead-in to additional content. segunda prueba aca vamos a escribir algo para probar definitivamente tiene que haber un minimo de caraceteres para realizarprobando probando"
  }]
  formulario:FormGroup
faPlus=faPlus
login:boolean=false
  constructor(private loginService:LoginService) { 
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
  }
  eliminar(e:any):void{
    for(let i=0;i<this.programacion.length;i++){
      if(this.programacion[i].id==e){
        this.programacion.splice(i,1);
      }
    }
  }
  submitprogramacion(): void{
    let prog:Programacion=new Programacion
    prog.titulo =this.formulario.get('titulo')?.value
    prog.descripcion=this.formulario.get('descripcion')?.value
    prog.url=this.formulario.get('url')?.value
    this.programacion.push(prog)
  }
}
