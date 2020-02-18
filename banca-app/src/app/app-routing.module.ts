import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {RegistroUsuarioComponent} from './componentes/registro-usuario/registro-usuario.component';
import {LoginComponent} from './componentes/login/login.component';
import {PerfilUsuarioComponent} from './componentes/perfil-usuario/perfil-usuario.component';

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
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list/:carnet',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'Registro',
    component: RegistroUsuarioComponent
  },
  {
    path: 'PerfilUsuario',
    component: PerfilUsuarioComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
