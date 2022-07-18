import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Educacion } from 'src/models/Educacion';
import { Experiencia } from 'src/models/Experiencia';
import { Habilidades } from 'src/models/Habilidades';
import { ProyectoA } from 'src/models/ProyectoA';
import { Programacion } from 'src/models/ProyectoP';
import { Usuario } from 'src/models/Usuario';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  springBootUrl:string = 'http://localhost:8080'

  educacionSubject:Subject<Educacion[]>=new Subject;
  experienciaSubject:Subject<Experiencia[]>=new Subject;
  habilidadSubject:Subject<Habilidades[]>=new Subject;
  arteSubject:Subject<ProyectoA[]>=new Subject;
  programacionSubject:Subject<Programacion[]>=new Subject;
  ususarioSubject:Subject<Usuario[]>=new Subject;

  constructor(private apiService:HttpClient) {
   }
   //EDUCACION
   getEducacion(){
     this.apiService.get<Educacion[]>(this.springBootUrl+'/educacion')
     .subscribe(e=>{
       this.educacionSubject.next(e);
     });
   }
   delEducacion(id:number){
     this.apiService.delete(this.springBootUrl+'/del/educacion?id='+id);
   }
   postEducacion(educacion:Educacion){
     this.apiService.post(this.springBootUrl+'/new/educacion',educacion).subscribe();
   }

   //EXPERIENCIA
   getExperiencia(){
    this.apiService.get<Experiencia[]>(this.springBootUrl+'/experiencia')
    .subscribe(e=>{
      this.experienciaSubject.next(e);
    });
  }
  delExperiencia(id:number){
    this.apiService.delete(this.springBootUrl+'/del/experiencia?id='+id);
  }
  postExperiencia(experiencia:Experiencia){
    this.apiService.post(this.springBootUrl+'/new/experiencia',experiencia).subscribe();
  }

  //HABILIDADES
  getHabilidades(){
    this.apiService.get<Habilidades[]>(this.springBootUrl+'/habilidad')
    .subscribe(e=>{
      this.habilidadSubject.next(e);
    });
  }
  delHabilidad(id:number){
    this.apiService.delete(this.springBootUrl+'/del/habilidad?id='+id);
  }
  postHabilidad(habilidad:Habilidades){
    this.apiService.post(this.springBootUrl+'/new/habilidad',habilidad).subscribe();
  }

  //PROYECTOS
    //arte
  getProyectoA(){
    this.apiService.get<ProyectoA[]>(this.springBootUrl+'/artistico')
    .subscribe(e=>{
      this.arteSubject.next(e);
    });
  }
  delProyectoA(id:number){
    this.apiService.delete(this.springBootUrl+'/del/artistico?id='+id);
  }
  postProyectoA(artistico:ProyectoA){
    this.apiService.post(this.springBootUrl+'/new/artistico',artistico).subscribe();
  }
    //programacion
  getProgramacion(){
    this.apiService.get<Programacion[]>(this.springBootUrl+'/programacion')
    .subscribe(e=>{
      this.programacionSubject.next(e);
    });
  }
  delProgramacion(id:number){
    this.apiService.delete(this.springBootUrl+'/del/programacion?id='+id);
  }
  postProgramacion(programacion:Programacion){
    this.apiService.post(this.springBootUrl+'/new/programacion',programacion).subscribe();
  }

  //USUARIO
  getUsuario(){
    this.apiService.get<Usuario[]>(this.springBootUrl+'/usuario')
    .subscribe(e=>{
      this.ususarioSubject.next(e);
    });
  }
  delUsuario(id:number){
    this.apiService.delete(this.springBootUrl+'/del/usuario?id='+id);
  }
  postUsuario( usuario:Usuario){
    this.apiService.post(this.springBootUrl+'/new/usuario', usuario).subscribe();
  }
}
