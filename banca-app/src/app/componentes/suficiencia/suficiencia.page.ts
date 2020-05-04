import {Component, HostBinding, OnInit} from '@angular/core';
import {GlobalService} from '../../servicios/global.service';

import {SuficienciaService} from '../../servicios/suficiencia.service';
import {Suficiencia} from '../../Modelos/Suficiencia';
import {ReembolsoVacacionesService} from '../../servicios/reembolso-vacaciones.service';
import {Reembolso} from '../../Modelos/Reembolso';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-listapagos',
  templateUrl: './suficiencia.page.html',
  styleUrls: ['./suficiencia.page.scss'],
})

export class SuficienciaPage implements OnInit {
  cursos: any = []
  cuentas: any = []

  seccion: string

  suficiencia: Suficiencia = {
    no_cuenta: 0,
    curso: 0,
    descripcion: 'Se ha asignado una suficiencia:'
  }

  Reembolso: Reembolso = {
    no_cuenta: 0,
    monto: 0,
    curso: 0,
    descripcion: 'Suficiencia de un curso - ',
    user: 0,
    curso_sem: 0
  }

  constructor(private router : Router, private global: GlobalService, private suficienciaServices: SuficienciaService, private reembolso: ReembolsoVacacionesService,
              public alertController: AlertController) { }

  ngOnInit() {
    console.log(this.global.carne)
    this.Reembolso.user = this.global.carne
    
    this.suficienciaServices.getCursos().subscribe(
        res => {
          this.cursos = res;
          console.log(res);
        },
        err => console.error(err)
    )

    this.suficienciaServices.getCuentas(this.global.carne).subscribe(
        res => {
          this.cuentas = res;
          console.log(res);
        },
        err => console.error(err)
    )
  }

  Asignar() {

    for (const entry of this.cursos) {
      if (entry.curso == this.Reembolso.curso)
      {
        this.Reembolso.monto = 20
        this.Reembolso.curso_sem = entry.idcursos_semestre
        this.seccion = entry.seccion
        break;
      }
    }
    this.Reembolso.monto = 20
    //this.Reembolso.descripcion += (' Seccion: ' + this.seccion)

    this.reembolso.Desasignar(this.Reembolso).subscribe(
        res => {
          console.log(res);
          this.presentAlert('Sufisiencia','Asigancion exitosa.')
          this.router.navigate([`/home/${this.global.carne}`])
        },
        err => console.error(err)
    );
    
    //this.suficienciaServices.Asign(this.suficiencia)
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
