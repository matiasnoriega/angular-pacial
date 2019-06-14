import { NgModule }    from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuariosBuscarComponent } from './usuarios-buscar/usuarios-buscar/usuarios-buscar.component';
// hasta acá imports propios de Angular


// nuestros componentes creados
// en este módulo


@NgModule({
  declarations: [
  UsuariosBuscarComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
  ],
  providers: [],
})
export class UsuariosModule { }

