import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../servicios/global.service'
import {Reembolso} from '../../Modelos/Reembolso';
import {AlertController} from '@ionic/angular';
import {Router} from "@angular/router";
import {ReembolsoVacacionesService} from "../../servicios/reembolso-vacaciones.service";


@Component({
  selector: 'app-reembolso-vacaciones',
  templateUrl: './reembolso-vacaciones.page.html',
  styleUrls: ['./reembolso-vacaciones.page.scss'],
})
export class ReembolsoVacacionesPage implements OnInit {

  cursos: any = []
  cuentas: any = []
  total: number
  curso: number
  seccion: string
  nom_curso: string

  constructor(private router : Router, private reembolso: ReembolsoVacacionesService ,
              private global: GlobalService, public alertController: AlertController) { }

  Reembolso: Reembolso = {
    no_cuenta: 0,
    monto: 0,
    curso: 0,
    descripcion: 'Reembolso por desasignacion de un curso de vacaciones - ',
    user: 0,
    curso_sem: 0
  }

  ngOnInit() {
    console.log(this.global.carne)
    this.Reembolso.user = this.global.carne
    this.reembolso.ObtenerCursos(this.global.carne).subscribe(
        res => {
          this.cursos = res;
          console.log(res);
        },
        err => console.error(err)
    )

    this.reembolso.getCuentas(this.global.carne).subscribe(
        res => {
          this.cuentas = res;
        },
        err => console.error(err)
    )
  }

  public Desasignar(){

    for (const entry of this.cursos) {
      if (entry.curso == this.Reembolso.curso)
      {
        this.Reembolso.monto = entry.total
        this.Reembolso.curso_sem = entry.idcursos_semestre
        this.seccion = entry.seccion
        break;
      }
    }
    this.Reembolso.descripcion += (' Seccion: ' + this.seccion)

    this.reembolso.Desasignar(this.Reembolso).subscribe(
        res => {
          console.log(res);
          this.presentAlert('Cursos de Vacaciones','Se ha hecho la desasignacion correctamente.')
          this.router.navigate([`/home/${this.global.carne}`])
        },
        err => console.error(err)
    );


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
