import { Component, OnInit } from '@angular/core';
import {crearusuario} from '../../Modelos/CrearUsuario';
import {RegistroUsuarioService} from '../../servicios/registro-usuario.service';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
})
export class InscriptionComponent implements OnInit {

  carnet: number;
  name: string;
  lastName: string;
  transaction: number;
  date: string;
  email: string;
  dpi: number
  request: crearusuario;

  newUser(carnet, name, lastName, dpi, email, password, date, active) : crearusuario{
    return{
      carnet: carnet,
      nombre: name,
      apellido: lastName,
      dpi: dpi,
      correo: email,
      contrasena: password,
      fecha_nac: date,
      habilitado: active
    }
  };

  constructor(private Usuarioservice: RegistroUsuarioService, public alertController: AlertController) { }

  ngOnInit() {}

  Register(){
    this.request = this.newUser(this.carnet, this.name, this.lastName, this.dpi, this.email, 'password', this.date, true)
    this.Usuarioservice.registrar(this.request).subscribe(
        res =>{
          this.presentAlert();
          this.clearFields();
        },
        error => console.error(error)
    )
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Felicidades',
      message: 'El pago ha sido efectuado y el usuario regitrado',
      buttons: ['OK']
    });

    await alert.present();
  }

  clearFields(){
    this.carnet = 0;
    this.dpi = 0;
    this.email = '';
    this.lastName = '';
    this.name = '';
    this.date = '';
    this.transaction = 0;
  }

}
