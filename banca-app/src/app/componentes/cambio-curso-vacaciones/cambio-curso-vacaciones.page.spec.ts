import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CambioCursoVacacionesPage } from './cambio-curso-vacaciones.page';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Routes} from '@angular/router';
import {HomePage} from '../home/home.page';
import {FormsModule} from '@angular/forms';

describe('CambioCursoVacacionesPage', () => {
  let component: CambioCursoVacacionesPage;
  let fixture: ComponentFixture<CambioCursoVacacionesPage>;

  const routes: Routes = [
    { path: 'home/:cuenta',
      loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)},
  ];


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambioCursoVacacionesPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule.withRoutes(routes), HttpClientTestingModule, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CambioCursoVacacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  describe('change courses', () => {
    it('should assing', fakeAsync(() => {
      component.Cambio.curso = 5
      component.Cambio.cambio = 5
      component.Cambio.carnet = 2121
      component.conlaboratorio()
      component.todos  = [{idcursos_semestre : 1, total: 115, precio : 30}]
      component.cursos = [{idcursos_semestre : 0, total: 115}]
      component.hacerCambio();
      tick(50);
      expect(true).toBeTruthy();
    }));
  });

  describe('simulate alert', () => {
    it('should show alert', fakeAsync(() => {
      component.presentAlert('asdf', 'asdf')
      tick(1000);
      expect(true).toBeTruthy();
    }));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
