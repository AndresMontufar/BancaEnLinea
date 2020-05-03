import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistorialCuentaPage } from './historial-cuenta.page';

describe('HistorialCuentaPage', () => {
  let component: HistorialCuentaPage;
  let fixture: ComponentFixture<HistorialCuentaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialCuentaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistorialCuentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
