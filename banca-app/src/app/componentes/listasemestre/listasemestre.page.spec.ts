import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListasemestrePage } from './listasemestre.page';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule} from '@angular/forms';

describe('ListasemestrePage', () => {
  let component: ListasemestrePage;
  let fixture: ComponentFixture<ListasemestrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListasemestrePage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ListasemestrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
