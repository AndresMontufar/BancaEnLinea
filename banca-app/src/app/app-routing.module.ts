import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {RegistroUsuarioComponent} from './componentes/registro-usuario/registro-usuario.component';
import {LoginComponent} from './componentes/login/login.component';
import {InscriptionComponent} from './simulate/inscription/inscription.component';
import {TransactionComponent} from './simulate/transaction/transaction.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home/:carnet',
    loadChildren: () => import('./componentes/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list/:carnet',
    loadChildren: () => import('./componentes/list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'perfil/:carnet',
    loadChildren: () => import('./componentes/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'listapagos/:carnet',
    loadChildren: () => import('./componentes/listapagos/listapagos.module').then( m => m.ListapagosPageModule)
  },
  {
    path: 'suficiencia/:carnet',
    loadChildren: () => import('./componentes/suficiencia/suficiencia.module').then( m => m.SuficienciaPageModule)
  },
  {
    path: 'retrasada/:carnet',
    loadChildren: () => import('./componentes/retrasada/retrasada.module').then( m => m.RetrasadaPageModule)
  },
  {
    path: 'vacaciones/:carnet',
    loadChildren: () => import('./componentes/vacaciones/vacaciones.module').then( m => m.VacacionesPageModule)
  },
  {
    path: 'Registro',
    component: RegistroUsuarioComponent
  },
  //simulation
  {
    path: 'simularInscripcion',
    component: InscriptionComponent
  },
  {
    path: 'simularTransaccion',
    component: TransactionComponent
  },
  {
    path: 'listapagos',
    loadChildren: () => import('./componentes/listapagos/listapagos.module').then(m => m.ListapagosPageModule)
  },
  {
    path: 'suficiencia',
    loadChildren: () => import('./componentes/suficiencia/suficiencia.module').then( m => m.SuficienciaPageModule)
  },
  {
    path: 'retrasada',
    loadChildren: () => import('./componentes/retrasada/retrasada.module').then(m => m.RetrasadaPageModule)
  },
  {
    path: 'vacaciones',
    loadChildren: () => import('./componentes/vacaciones/vacaciones.module').then(m => m.VacacionesPageModule)
  },
  {
    path: 'cambio-curso-vacaciones/:carnet',
    loadChildren: () => import('./componentes/cambio-curso-vacaciones/cambio-curso-vacaciones.module').then(m => m.CambioCursoVacacionesPageModule)
  },
  {
    path: 'cambio-curso-vacaciones/:carnet',
    loadChildren: () => import('./componentes/cambio-curso-vacaciones/cambio-curso-vacaciones.module').then( m => m.CambioCursoVacacionesPageModule)
  },
  {
    path: 'menuvacaciones/:carnet',
    loadChildren: () => import('./componentes/menu-vacaciones/menu-vacaciones.module').then( m => m.MenuVacacionesPageModule)
  },
  {
    path: 'menu-vacaciones',
    loadChildren: () => import('./componentes/menu-vacaciones/menu-vacaciones.module').then( m => m.MenuVacacionesPageModule)
  },
  {
    path: 'reembolso-vacaciones/:carnet',
    loadChildren: () => import('./componentes/reembolso-vacaciones/reembolso-vacaciones.module').then( m => m.ReembolsoVacacionesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
