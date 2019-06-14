import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnlacesListComponent} from './enlaces-list/enlaces-list.component';

import { EnlacesDashboardComponent} from './enlaces-dashboard/enlaces-dashboard.component';




const routes: Routes = [
  {
    path: '',
    component: EnlacesDashboardComponent,
    pathMatch: 'full'
  },
  {
    path: 'lista',
    component: EnlacesListComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnlacesRoutingModule { }
