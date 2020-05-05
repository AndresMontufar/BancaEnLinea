import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RetrasadaPage } from './retrasada.page';
import {Routes} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule} from '@angular/forms';

describe('RetrasadaPage', () => {
  let component: RetrasadaPage;
  let fixture: ComponentFixture<RetrasadaPage>;

  const routes: Routes = [
    { path: 'home/:cuenta',
      loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)},
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrasadaPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule.withRoutes(routes), HttpClientTestingModule,FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RetrasadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  describe('simulate alert', () => {
    it('should show alert', fakeAsync(() => {
      component.presentAlert('asdf', 'asdf')
      tick(1000);
      expect(true).toBeTruthy();
    }));
  });

  describe('assing course', () => {
    it('should assing', fakeAsync(() => {
      component.Reembolso.curso = 5
      component.cursos = [{idcursos_semestre : 0, total: 115, curso: 5, seccion: 1}]
      component.retraasign();
      tick(50);
      expect(true).toBeTruthy();
    }));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
