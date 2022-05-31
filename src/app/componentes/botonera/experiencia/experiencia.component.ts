import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
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
  @Output() experiencia:Experiencia[]=[{id:1,
    url:"",
    empresa:"Minix - Salon de juego",
    puesto:"Animadora de eventos",
    fechadeinicio:"2018",
    fechadeegreso:"2019",
    descripcion:"tareas generales"
  },
    {id:2,
      url:"assets/casimiro.png",
      empresa:"Casimiro - Restaurant",
      puesto:"Animadora de eventos",
      fechadeinicio:"2016",
      fechadeegreso:"2017",
      descripcion:"breve descripcion"    
    },
      {id:3,
        url:"assets/logo-mostaza-.jpg",
        empresa:"Mostaza S.A.",
        puesto:"Atencion al publico",
        fechadeinicio:"2015",
        fechadeegreso:"2016",
        descripcion:"tareas generales"}];
  constructor(private loginService:LoginService) {
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
