import { NgModule }                     from '@angular/core';
import { RouterModule, Routes }         from '@angular/router';
import {Page404Component} from './page-404.component';

const enlacesRoutes: Routes = [
  { 
    path: '', 
    loadChildren: './enlaces/enlaces.module#EnlacesModule'
  },
];

const usuariosRoutes: Routes = [
  { 
    path: '', 
    loadChildren: './enlaces/enlaces.module#EnlacesModule'
  },
];

const routes: Routes = [
  {
    path: 'enlaces',
    children: enlacesRoutes
  },
  {
    path: '**',
    component: Page404Component,
  },
  {
    path: 'usuarios',
    children: usuariosRoutes
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, 
                {useHash: false , enableTracing: false}) 
            ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
