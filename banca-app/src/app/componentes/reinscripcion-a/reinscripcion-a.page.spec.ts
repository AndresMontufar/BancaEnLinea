import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReinscripcionAPage } from './reinscripcion-a.page';

describe('ReinscripcionAPage', () => {
  let component: ReinscripcionAPage;
  let fixture: ComponentFixture<ReinscripcionAPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReinscripcionAPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReinscripcionAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
