import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuVacacionesPage } from './menu-vacaciones.page';

const routes: Routes = [
  {
    path: '',
    component: MenuVacacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuVacacionesPageRoutingModule {}
