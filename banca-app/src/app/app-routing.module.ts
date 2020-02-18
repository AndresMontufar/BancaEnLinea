import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {RegistroUsuarioComponent} from './componentes/registro-usuario/registro-usuario.component';
import {LoginComponent} from './componentes/login/login.component';
import {PerfilUsuarioComponent} from './componentes/perfil-usuario/perfil-usuario.component';
import {InscriptionComponent} from './simulate/inscription/inscription.component';

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
    path: 'Registro',
    component: RegistroUsuarioComponent
  },
  {
    path: 'PerfilUsuario',
    component: PerfilUsuarioComponent
  },
  //simulation
  {
    path: 'simulateInscription',
    component: InscriptionComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
