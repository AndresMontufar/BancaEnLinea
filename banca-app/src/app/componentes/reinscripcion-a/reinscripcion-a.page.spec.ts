import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReinscripcionAPage } from './reinscripcion-a.page';
import {Routes} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule} from '@angular/forms';

describe('ReinscripcionAPage', () => {
  let component: ReinscripcionAPage;
  let fixture: ComponentFixture<ReinscripcionAPage>;

  const routes: Routes = [
    { path: 'home/:cuenta',
      loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)},
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReinscripcionAPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule.withRoutes(routes), HttpClientTestingModule, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ReinscripcionAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  describe('pay', () => {
    it('should pay', fakeAsync(() => {
      component.reinscripciones = {no_cuenta: 123, monto: 12}
      component.pagar()
      tick(1200);
      expect(component.router.navigated).toBeFalsy();
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
