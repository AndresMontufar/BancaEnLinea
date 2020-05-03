import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SemestrePage } from './semestre.page';

describe('SemestrePage', () => {
  let component: SemestrePage;
  let fixture: ComponentFixture<SemestrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemestrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SemestrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
