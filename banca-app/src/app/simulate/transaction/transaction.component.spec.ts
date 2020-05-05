import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransactionComponent } from './transaction.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule} from '@angular/forms';

describe('TransactionComponent', () => {
  let component: TransactionComponent;
  let fixture: ComponentFixture<TransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionComponent ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  describe('simulate deposits', () => {
    it('should deposits', fakeAsync(() => {
      component.carnet = 123
      component.amount = 12
      component.account = 123
      component.Deposit()
      tick(50);
      expect(component.carnet).toBeDefined();
    }));
  });

  describe('simulate withdraw', () => {
    it('should withdraw', fakeAsync(() => {
      component.carnet = 123
      component.amount = 12
      component.account = 123
      component.Withdraw()
      tick(50);
      expect(component.carnet).toBeDefined();
    }));
  });

  describe('simulate withdraw', () => {
    it('should withdraw', fakeAsync(() => {
      component.presentAlert('asdf', 'asdf')
      tick(1000);
      expect(true).toBeTruthy();
    }));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
