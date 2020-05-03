import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuVacacionesPage } from './menu-vacaciones.page';

describe('MenuVacacionesPage', () => {
  let component: MenuVacacionesPage;
  let fixture: ComponentFixture<MenuVacacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuVacacionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuVacacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
