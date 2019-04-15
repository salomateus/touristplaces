import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { AdstDescuentoComponent } from './adst-descuento/adst-descuento.component';
import { ActualizacionDComponent } from './actualizacion-d/actualizacion-d.component';
import { DescuentosComponent } from './descuentos/descuentos.component';
import { TurismoComponent } from './turismo/turismo.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { FooterComponent } from './footer/footer.component';
import { Turismop1Component } from './turismop1/turismop1.component';
import { Turismop2Component } from './turismop2/turismop2.component';
import { Turismop3Component } from './turismop3/turismop3.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    InicioComponent,
    PerfilComponent,
    AyudaComponent,
    IniciarSesionComponent,
    RegistrarseComponent,
    AdstDescuentoComponent,
    ActualizacionDComponent,
    DescuentosComponent,
    TurismoComponent,
    SolicitudComponent,
    FooterComponent,
    Turismop1Component,
    Turismop2Component,
    Turismop3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
