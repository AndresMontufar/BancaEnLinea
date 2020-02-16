import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerfilUsuarioComponent } from './perfil-usuario.component';

describe('PerfilUsuarioComponent', () => {
  let component: PerfilUsuarioComponent;
  let fixture: ComponentFixture<PerfilUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilUsuarioComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
