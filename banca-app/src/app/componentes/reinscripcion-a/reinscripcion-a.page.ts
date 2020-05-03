import { Component, OnInit } from '@angular/core';
import {Reinscripciones} from '../../Modelos/reinscripcion';
import {SuficienciaService} from '../../servicios/suficiencia.service';
import {GlobalService} from '../../servicios/global.service';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {ReinscripcionService} from '../../servicios/reinscripcion.service';

@Component({
  selector: 'app-reinscripcion-a',
  templateUrl: './reinscripcion-a.page.html',
  styleUrls: ['./reinscripcion-a.page.scss'],
})
export class ReinscripcionAPage implements OnInit {
  reinscripciones: Reinscripciones = {
    no_cuenta: 0,
    monto: 91
  }

  cuentas: any = []

  constructor(private global: GlobalService, private suficienciaServices: SuficienciaService,
              private router : Router, public alertController: AlertController, private reinscripcionservice: ReinscripcionService) { }

  async ngOnInit() {
    await delay(500);
    this.suficienciaServices.getCuentas(this.global.carne).subscribe(
        res => {
          this.cuentas = res;
          console.log(res);
        },
        err => console.error(err)
    )
    await delay(500);
  }

  async pagar() {
    console.log(this.reinscripciones)
    await delay(500);
    this.reinscripcionservice.Asign(this.reinscripciones)
    await delay(500);
    this.presentAlert('Reinscripcion', 'Exito..')
    this.router.navigate([`/home/${this.global.carne}`])
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
function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}
