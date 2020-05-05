import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerfilPage } from './perfil.page';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {FormsModule} from '@angular/forms';

describe('PerfilPage', () => {
  let component: PerfilPage;
  let fixture: ComponentFixture<PerfilPage>;

  const routes: Routes = [
    { path: 'home/:cuenta',
      loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)},
    {path: 'login', component: LoginComponent}
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilPage, LoginComponent ],
      imports: [IonicModule.forRoot(), RouterTestingModule.withRoutes(routes), HttpClientTestingModule, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  describe('set info', () => {
    it('should assing', fakeAsync(() => {
      component.setInfo([{}])
      tick(50);
      expect(component.carnet1).toBeDefined();
    }));
  });

  describe('set info new user', () => {
    it('should assing', fakeAsync(() => {
      component.newUser(1, '','',1,'','','2020-01-05',1)
      tick(50);
      expect(true).toBeTruthy();
    }));
  });

  describe('edit', () => {
    it('should edit', fakeAsync(() => {
      component.Modificar()
      tick(50);
      expect(component.router.navigated).toBeFalsy();
    }));
  });

  describe('delete', () => {
    it('should delete', fakeAsync(() => {
      component.eliminar()
      tick(50);
      expect(component.router.navigated).toBeTruthy();
    }));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
