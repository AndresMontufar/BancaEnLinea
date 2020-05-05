import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListapagosPage } from './listapagos.page';
import {Routes} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';

describe('ListapagosPage', () => {
  let component: ListapagosPage;
  let fixture: ComponentFixture<ListapagosPage>;

  const routes: Routes = [
    { path: 'home/:cuenta',
      loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)},
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListapagosPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule.withRoutes(routes), FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ListapagosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
