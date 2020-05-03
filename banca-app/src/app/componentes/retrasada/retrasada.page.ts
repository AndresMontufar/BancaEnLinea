import { Component, OnInit } from '@angular/core';
import {RetrasadaService} from '../../servicios/retrasada.service'
import {AlertController} from '@ionic/angular';
import {GlobalService} from '../../servicios/global.service'
import {Retrasada} from '../../Modelos/retrasada';
import {SuficienciaService} from '../../servicios/suficiencia.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-retrasada',
  templateUrl: './retrasada.page.html',
  styleUrls: ['./retrasada.page.scss'],
})
export class RetrasadaPage implements OnInit {
  public cursos: any = []

  public cuentas: any = []

  fechas: number;
  fecha: string;

  retra: Retrasada ={
    no_cuenta: 0,
    curso: 0,
    descripcion: 'Pago de Retrasada',
    fecha: ''
  }

  constructor(private retrasericio: RetrasadaService, public alertController: AlertController,
              private global: GlobalService, private suficienciaServices: SuficienciaService, private router : Router) { }

  async ngOnInit() {
    await delay(300);
    this.suficienciaServices.getCuentas(this.global.carne).subscribe(
        res => {
          this.cuentas = res;
          console.log(res);
        },
        err => console.error(err)
    )
    await delay(200);
    this.retrasericio.getcursosretra(this.global.carne).subscribe(
        res => {
          this.cursos = res;
          console.log(res);
        },
        err => console.error(err)
    )

    await delay(300);
  }

  async presentAlert(title, message) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async retraasign() {
    this.fechas = Date.now();

    this.fecha = new Date(this.fechas).getFullYear().toString() + '-' + (new Date(this.fechas).getMonth() + 1).toString() + '-' + (new Date(this.fechas).getDate() + 1).toString()
    //console.log(this.fecha);
    this.retra.fecha = this.fecha;
    await delay(500);

    this.retrasericio.Asign(this.retra)

    await delay(300);
    this.presentAlert('Retrasada', 'Retrasada asignada')

    this.router.navigate([`/home/${this.global.carne}`])
  }

}

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}
