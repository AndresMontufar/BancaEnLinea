import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RetrasadaPage } from './retrasada.page';

describe('RetrasadaPage', () => {
  let component: RetrasadaPage;
  let fixture: ComponentFixture<RetrasadaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrasadaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RetrasadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
