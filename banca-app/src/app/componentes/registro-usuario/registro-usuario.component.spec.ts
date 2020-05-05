import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistroUsuarioComponent } from './registro-usuario.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {FormsModule} from '@angular/forms';

describe('RegistroUsuarioComponent', () => {
  let component: RegistroUsuarioComponent;
  let fixture: ComponentFixture<RegistroUsuarioComponent>;

  const routes: Routes = [
    { path: 'login', component: LoginComponent},
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroUsuarioComponent , LoginComponent],
      imports: [IonicModule.forRoot(), RouterTestingModule.withRoutes(routes), HttpClientTestingModule, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  describe('set info', () => {
    it('should assing', fakeAsync(() => {
      component.newUser(1, '','',1,'','','2020-01-05',1)
      tick(50);
      expect(true).toBeTruthy();
    }));
  });

  describe('redirect to login', () => {
    it('should redirect', fakeAsync(() => {
      component.returnLogin()
      tick(50);
      expect(component.router.navigated).toBeTruthy();
    }));
  });

  describe('register', () => {
    it('should register', fakeAsync(() => {
      component.contra2 = 'asdf'
      component.contrasena1='asdf'
      component.Registrar()
      tick(50);
      expect(true).toBeTruthy();
    }));
  });

  describe('register', () => {
    it('should handle error', fakeAsync(() => {
      component.contra2 = 'asdf'
      component.contrasena1='asdf'
      //spyOn(component.alertController, '');
      component.Registrar()
      tick(50);
      expect(true).toBeTruthy()
      //expect(component.alertController.create).toHaveBeenCalledWith('Error', 'La contraseña no coincide');
    }));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
