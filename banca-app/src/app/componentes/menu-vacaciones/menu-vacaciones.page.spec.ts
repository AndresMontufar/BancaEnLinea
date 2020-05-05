import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuVacacionesPage } from './menu-vacaciones.page';
import {FormsModule} from '@angular/forms';
import {Routes} from '@angular/router';
import {RegistroUsuarioComponent} from '../registro-usuario/registro-usuario.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('MenuVacacionesPage', () => {
  let component: MenuVacacionesPage;
  let fixture: ComponentFixture<MenuVacacionesPage>;

  const routes : Routes = [
    {path: 'cambio-curso-vacaciones',
      loadChildren: () => import('../cambio-curso-vacaciones/cambio-curso-vacaciones-routing.module')
          .then(m => m.CambioCursoVacacionesPageRoutingModule)},
    {path: 'reembolso-vacaciones',
      loadChildren: () => import('../reembolso-vacaciones/reembolso-vacaciones-routing.module')
          .then(m => m.ReembolsoVacacionesPageRoutingModule)}
  ]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuVacacionesPage ],
      imports: [IonicModule.forRoot(), FormsModule, RouterTestingModule.withRoutes(routes)]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuVacacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
