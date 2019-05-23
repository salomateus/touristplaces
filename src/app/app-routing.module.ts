
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { InicioComponent } from './inicio/inicio.component';
import { DescuentosComponent } from './descuentos/descuentos.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { TurismoComponent } from './turismo/turismo.component';

const routes: Routes = [
{ path:"perfil", component: PerfilComponent },
{ path:"inicio", component: InicioComponent },
{ path:"descuentos", component: DescuentosComponent },
{ path:"ayuda", component: AyudaComponent },
{ path:"turismo", component: TurismoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
