import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SemestrePage } from './semestre.page';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule} from '@angular/forms';
import {Routes} from '@angular/router';
import {RegistroUsuarioComponent} from '../registro-usuario/registro-usuario.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('SemestrePage', () => {
  let component: SemestrePage;
  let fixture: ComponentFixture<SemestrePage>;

  const routes : Routes = [
    {path: 'listasemestre/:carne', loadChildren: () => import('../listasemestre/listasemestre-routing.module')
          .then(m => m.ListasemestrePageRoutingModule)},
  ]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemestrePage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, FormsModule, RouterTestingModule.withRoutes(routes)]
    }).compileComponents();

    fixture = TestBed.createComponent(SemestrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
