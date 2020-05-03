import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReembolsoVacacionesPage } from './reembolso-vacaciones.page';

describe('ReembolsoVacacionesPage', () => {
  let component: ReembolsoVacacionesPage;
  let fixture: ComponentFixture<ReembolsoVacacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReembolsoVacacionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReembolsoVacacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
