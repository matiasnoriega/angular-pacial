import { NgModule }    from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
// hasta acá imports propios de Angular


// nuestros componentes creados
// en este módulo

import { EnlacesRoutingModule} from './enlaces-routing.module';
import { EnlacesListComponent} from './enlaces-list/enlaces-list.component';
import { EnlacesDashboardComponent} from './enlaces-dashboard/enlaces-dashboard.component';

@NgModule({
  declarations: [
    EnlacesListComponent,
    EnlacesDashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EnlacesRoutingModule
  ],
  exports: [
  ],
  providers: [],
})
export class EnlacesModule { }

