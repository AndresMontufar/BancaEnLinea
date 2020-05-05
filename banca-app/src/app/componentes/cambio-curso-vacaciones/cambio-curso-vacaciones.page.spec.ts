import { async, ComponentFixture, TestBed } from '@angular/core/testing';
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
