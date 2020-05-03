import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListasemestrePage } from './listasemestre.page';

describe('ListasemestrePage', () => {
  let component: ListasemestrePage;
  let fixture: ComponentFixture<ListasemestrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListasemestrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListasemestrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
