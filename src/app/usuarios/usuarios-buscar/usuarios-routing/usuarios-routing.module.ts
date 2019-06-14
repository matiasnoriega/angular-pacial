import { NgModule }                     from '@angular/core';
import { RouterModule, Routes }         from '@angular/router';

import { CommonModule } from '@angular/common';
import { UsuariosBuscarComponent } from '../usuarios-buscar/usuarios-buscar.component';

const routes: Routes = [
  { 
    path: '',
    component: UsuariosBuscarComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
