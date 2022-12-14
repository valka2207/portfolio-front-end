import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/services/api.service';
import { LoginService } from 'src/app/services/login.service';
import { Programacion } from 'src/models/ProyectoP';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  @Output() programacion:Programacion[]
  
  formulario:FormGroup
faPlus=faPlus
login:boolean=false
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
    this.apiService.programacionSubject.subscribe(e=>{
      this.programacion=e;
    })
  }
  eliminar(e:any):void{
    this.apiService.delProgramacion(e)
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
    this.apiService.postProgramacion(prog)
  }
}
