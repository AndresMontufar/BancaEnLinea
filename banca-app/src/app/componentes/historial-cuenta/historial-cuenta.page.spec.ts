import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistorialCuentaPage } from './historial-cuenta.page';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule} from '@angular/forms';

describe('HistorialCuentaPage', () => {
  let component: HistorialCuentaPage;
  let fixture: ComponentFixture<HistorialCuentaPage>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialCuentaPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HistorialCuentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
