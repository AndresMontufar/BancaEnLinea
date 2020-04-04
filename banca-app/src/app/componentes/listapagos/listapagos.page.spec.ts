import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListapagosPage } from './listapagos.page';

describe('ListapagosPage', () => {
  let component: ListapagosPage;
  let fixture: ComponentFixture<ListapagosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListapagosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListapagosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
