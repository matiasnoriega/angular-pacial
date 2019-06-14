import { NgModule }    from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuariosRoutingModule } from './usuarios-buscar/usuarios-routing/usuarios-routing.module';
import { UsuariosBuscarComponent } from './usuarios-buscar/usuarios-buscar/usuarios-buscar.component';
// hasta acá imports propios de Angular


// nuestros componentes creados
// en este módulo


@NgModule({
  declarations: [
  UsuariosBuscarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsuariosRoutingModule
  ],
  exports: [
  ],
  providers: [],
})
export class UsuariosModule { }

