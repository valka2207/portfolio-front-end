import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/services/api.service';
import { LoginService } from 'src/app/services/login.service';
import { ProyectoA } from 'src/models/ProyectoA';

@Component({
  selector: 'app-nuevoartistico',
  templateUrl: './nuevoartistico.component.html',
  styleUrls: ['./nuevoartistico.component.css']
})
export class NuevoartisticoComponent implements OnInit {
  formulario:FormGroup
  faPlus=faPlus
  login:boolean=false;
  @Output() obras:ProyectoA[]

  constructor(private loginService:LoginService, private apiService:ApiService) {
    this.formulario=new FormGroup({
      url:new FormControl ('', Validators.required),
      titulo:new FormControl ('', Validators.required),
      descripcion:new FormControl ('', Validators.required)
    })
   }

  ngOnInit(): void {
    this.loginService.subjectLogin.subscribe(log=>{
      this.login=log;
    })
    this.login=this.loginService.getLogin()
    this.apiService.arteSubject.subscribe(e=>{
      this.obras=e;
    })
  }
  eliminar(e:any):void{
    for(let i=0;i<this.obras.length;i++){
      if(this.obras[i].id==e){
        this.obras.splice(i,1);
      }
    }
  }
  submitobra(): void{
    let ob:ProyectoA=new ProyectoA
    ob.url=this.formulario.get('url')?.value
    ob.titulo=this.formulario.get('titulo')?.value
    ob.descripcion=this.formulario.get('descripcion')?.value
    this.obras.push(ob)
  }
}
