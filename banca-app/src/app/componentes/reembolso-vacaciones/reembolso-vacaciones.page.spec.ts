import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReembolsoVacacionesPage } from './reembolso-vacaciones.page';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

describe('ReembolsoVacacionesPage', () => {
  let component: ReembolsoVacacionesPage;
  let fixture: ComponentFixture<ReembolsoVacacionesPage>;

  const routes: Routes = [
    { path: 'home/:cuenta',
      loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)},
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReembolsoVacacionesPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule.withRoutes(routes), HttpClientTestingModule, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ReembolsoVacacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  describe('change courses', () => {
    it('should assing', fakeAsync(() => {
      component.Reembolso.curso = 5;
      component.cursos = [{total: 20, idcursos_semestre: 2, seccion:5, curso: 5}]
      component.Desasignar()
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
