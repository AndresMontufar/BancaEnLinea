import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CambioCursoVacacionesPage } from './cambio-curso-vacaciones.page';

describe('CambioCursoVacacionesPage', () => {
  let component: CambioCursoVacacionesPage;
  let fixture: ComponentFixture<CambioCursoVacacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambioCursoVacacionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CambioCursoVacacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
