import { Component, OnInit } from '@angular/core';
import {RetrasadaService} from '../../servicios/retrasada.service'
import {AlertController} from '@ionic/angular';
import {GlobalService} from '../../servicios/global.service'
import {Retrasada} from '../../Modelos/retrasada';
import {SuficienciaService} from '../../servicios/suficiencia.service';
import {Router} from "@angular/router";
import {ReembolsoVacacionesService} from '../../servicios/reembolso-vacaciones.service';
import {Reembolso} from '../../Modelos/Reembolso';

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
  seccion: string

  retra: Retrasada ={
    no_cuenta: 0,
    curso: 0,
    descripcion: 'Pago de Retrasada',
    fecha: ''
  }

  Reembolso: Reembolso = {
    no_cuenta: 0,
    monto: 0,
    curso: 0,
    descripcion: 'Retrasada de un curso - ',
    user: 0,
    curso_sem: 0
  }

  constructor(private retrasericio: RetrasadaService, public alertController: AlertController,
              private global: GlobalService, private suficienciaServices: SuficienciaService, private router : Router,
              private reembolso: ReembolsoVacacionesService) { }

  async ngOnInit() {
    console.log(this.global.carne)
    this.Reembolso.user = this.global.carne

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

  retraasign() {
    for (const entry of this.cursos) {
      if (entry.curso == this.Reembolso.curso)
      {
        this.Reembolso.monto = 15
        this.Reembolso.curso_sem = entry.idcursos_semestre
        this.seccion = entry.seccion
        break;
      }
    }
    this.Reembolso.monto = 15
    //this.Reembolso.descripcion += (' Seccion: ' + this.seccion)

    this.reembolso.Desasignar(this.Reembolso).subscribe(
        res => {
          console.log(res);
          this.presentAlert('Retrasada','Asigancion exitosa.')
          this.router.navigate([`/home/${this.global.carne}`])
        },
        err => console.error(err)
    );
  }

}

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}
