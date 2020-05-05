import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InscriptionComponent } from './inscription.component';
import {FormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('InscriptionComponent', () => {
  let component: InscriptionComponent;
  let fixture: ComponentFixture<InscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptionComponent ],
      imports: [IonicModule.forRoot(), FormsModule, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(InscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  describe('clear fields', () => {
    it('should clear', fakeAsync(() => {
      component.clearFields()
      tick(50);
      expect(component.carnet).toBeDefined();
    }));
  });

  describe('register inscription', () => {
    it('should register', fakeAsync(() => {
      component.carnet = 123
      component.date = '2020-05-2'
      component.name = ''
      component.lastName = 'asdf'
      component.dpi = 21212
      component.email = ''
      component.date = ''
      component.Register()
      tick(50);
      expect(component.carnet).toBeDefined();
    }));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
