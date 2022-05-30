import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { LoginComponent } from './componentes/login/login.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { BotoneraComponent } from './componentes/botonera/botonera.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { ProgresoCircularComponent } from './componentes/progreso-circular/progreso-circular.component';
import { EducacionComponent } from './componentes/botonera/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/botonera/experiencia/experiencia.component';
import { HabilidadesComponent } from './componentes/botonera/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/botonera/proyectos/proyectos.component';
import { InicioComponent } from './componentes/botonera/inicio/inicio.component';
import { NuevaeducacionComponent } from './componentes/botonera/educacion/nuevaeducacion/nuevaeducacion.component';
import { NuevaexperienciaComponent } from './componentes/botonera/experiencia/nuevaexperiencia/nuevaexperiencia.component';
import { NuevahabilidadComponent } from './componentes/botonera/habilidades/nuevahabilidad/nuevahabilidad.component';
import { NuevoprogramacionComponent } from './componentes/botonera/proyectos/nuevoprogramacion/nuevoprogramacion.component';
import { NuevoartisticoComponent } from './componentes/botonera/proyectos/nuevoartistico/nuevoartistico.component';
import { ObraComponent } from './componentes/botonera/proyectos/nuevoartistico/obra/obra.component';
import { FormularioeduComponent } from './componentes/botonera/educacion/formularioedu/formularioedu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    LoginComponent,
    PerfilComponent,
    BotoneraComponent,
    BannerComponent,
    ProgresoCircularComponent,
    EducacionComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    ProyectosComponent,
    InicioComponent,
    NuevaeducacionComponent,
    NuevaexperienciaComponent,
    NuevahabilidadComponent,
    NuevoprogramacionComponent,
    NuevoartisticoComponent,
    ObraComponent,
    FormularioeduComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
