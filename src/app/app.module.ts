import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import appComponent, { AppComponent } from './app.component';
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


import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule, FirestoreSettingsToken } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import{ AngularFireDatabaseModule} from 'angularfire2/database';
import{FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonaService } from './services/persona.service';


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
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'Tourist Places'),FormsModule, ReactiveFormsModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireDatabaseModule,
    FormsModule, ReactiveFormsModule
  
  ],
  providers: [PersonaService, {provide: FirestoreSettingsToken, useValue:{}}],
  bootstrap: [AppComponent]
})

export class AppModule { }

