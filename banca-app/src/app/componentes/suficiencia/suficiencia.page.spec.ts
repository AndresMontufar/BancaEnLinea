import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuficienciaPage } from './suficiencia.page';

describe('SuficienciaPage', () => {
  let component: SuficienciaPage;
  let fixture: ComponentFixture<SuficienciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuficienciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuficienciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
