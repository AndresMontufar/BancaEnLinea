import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {TransaccionService} from '../../servicios/transaccion.service'
import {Transaction} from '../../Modelos/Transaction'


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent implements OnInit {

  account: number;
  amount: number;
  carnet: number;

  newTransaction(account, amount, deposit) : Transaction{
    return{
        no_cuenta: account,
        retiro: amount,
        deposito: deposit
    }
  }

  constructor(private router : Router, private transaccionService : TransaccionService,
              public alertController: AlertController) { }

  ngOnInit() {

  }

  Deposit(){
    if(this.carnet && this.amount && this.carnet){
      this.transaccionService.Deposit(this.newTransaction(this.account, 0, this.amount), this.carnet).subscribe(
          res =>{
            if(res===true){
              this.presentAlert('Felicidades','Deposito efectuado con éxito')
            }
            else{
              this.presentAlert('Error','No se puedo efectuar el depósito')
            }
          },
          err => console.error(err)
      )
    }
  }

  Withdraw(){
    if(this.carnet && this.amount && this.carnet){
      this.transaccionService.Withdraw(this.newTransaction(this.account, this.amount, 0), this.carnet).subscribe(
          res =>{
            if(res===true){
              this.presentAlert('Felicidades','Retiro efectuado con éxito')
            }
            else{
              this.presentAlert('Error','No se puedo efectuar el retiro')
            }
          },
          err => console.error(err)
      )
    }
  }

  async presentAlert(title, message) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

}
