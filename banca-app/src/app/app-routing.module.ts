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
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
