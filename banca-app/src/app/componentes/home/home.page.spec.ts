import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import {Routes} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {LoginComponent} from '../login/login.component';
import {FormsModule} from '@angular/forms';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  const routes: Routes = [
    { path: 'reinscripcion-a',
      loadChildren: () => import('../reinscripcion-a/reinscripcion-a.module').then(m => m.ReinscripcionAPageModule)},
    { path: 'historial-cuenta/:carnet',
      loadChildren: () => import('../historial-cuenta/historial-cuenta.module').then(m => m.HistorialCuentaPageModule)},
    { path: '', component: LoginComponent}
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage, LoginComponent],
      imports: [IonicModule.forRoot(), RouterTestingModule.withRoutes(routes), HttpClientTestingModule, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
