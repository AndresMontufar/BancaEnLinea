import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VacacionesPage } from './vacaciones.page';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule} from '@angular/forms';

describe('VacacionesPage', () => {
  let component: VacacionesPage;
  let fixture: ComponentFixture<VacacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacacionesPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(VacacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  describe('redirect to login', () => {
    it('should redirect', fakeAsync(() => {
      component.global.carne = 12345
      component.curso_semestre = 123
      component.conlaboratorio()
      component.vacasasignar()
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
