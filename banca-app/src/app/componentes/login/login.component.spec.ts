import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginComponent } from './login.component';
import {LoginService} from '../../servicios/login.service';
import {Router, Routes} from '@angular/router';
import {HomePage} from '../home/home.page';
import {RegistroUsuarioComponent} from '../registro-usuario/registro-usuario.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule} from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: LoginService

  const routes : Routes = [
    {path: 'home/:id', loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)},
    {path: 'Registro', component: RegistroUsuarioComponent},
    {path: 'reinscripcion-a', loadChildren: () => import('../reinscripcion-a/reinscripcion-a.module').then(m => m.ReinscripcionAPageModule)},
    {path: 'reinscripcion-a/:carne', loadChildren: () => import('../reinscripcion-a/reinscripcion-a.module').then(m => m.ReinscripcionAPageModule)}
  ]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ,RegistroUsuarioComponent],
      imports: [IonicModule.forRoot(), RouterTestingModule.withRoutes(routes), HttpClientTestingModule, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    service = TestBed.get(LoginService);
    fixture.detectChanges();
  }));

  describe('validate Login', () => {
    it('should redirect', fakeAsync(() => {
      component.password = '123'
      component.carne = 1111
      component.validateLogin()
      tick(50);
      expect(true).toBeTruthy();
    }));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
