import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/services/api.service';
import { LoginService } from 'src/app/services/login.service';
import { Experiencia } from 'src/models/Experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  formulario:FormGroup
  faPlus=faPlus
  login:boolean=false;
  @Output() experiencia:Experiencia[];
  
  constructor(private loginService:LoginService, private apiService:ApiService) {
    this.formulario=new FormGroup({
      url:new FormControl ('', Validators.required),
      empresa:new FormControl ('', Validators.required),
      fechadeinicio:new FormControl ('', Validators.required),
      fechadeegreso:new FormControl ('', Validators.required),
      puesto:new FormControl ('', Validators.required),
      descripcion:new FormControl ('', Validators.required)
    })
   }

  ngOnInit(): void {
    this.loginService.subjectLogin.subscribe(log=>{
      this.login=log;
    })
    this.apiService.experienciaSubject.subscribe(e=>{
      this.experiencia=e;
    })
  }
  eliminar(e:any):void{
    for(let i=0;i<this.experiencia.length;i++){
      if(this.experiencia[i].id==e){
        this.experiencia.splice(i,1);
      }
    }
  }
  submitexperiencia(): void{
    let exp:Experiencia=new Experiencia
    exp.url =this.formulario.get('url')?.value
    exp.fechadeinicio=this.formulario.get('fechadeinicio')?.value
    exp.fechadeegreso=this.formulario.get('fechadeegreso')?.value
    exp.empresa=this.formulario.get('empresa')?.value
    exp.puesto=this.formulario.get('puesto')?.value
    exp.descripcion=this.formulario.get('descripcion')?.value
    this.experiencia.push(exp)
  }

}
