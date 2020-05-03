import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambioCursoVacacionesPage } from './cambio-curso-vacaciones.page';

const routes: Routes = [
  {
    path: '',
    component: CambioCursoVacacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambioCursoVacacionesPageRoutingModule {}
