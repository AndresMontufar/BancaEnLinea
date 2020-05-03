import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GlobalService} from '../../servicios/global.service'
import {CuentaService} from '../../servicios/cuenta.service';
import {Cuenta} from '../../Modelos/Cuenta';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public sub;
  public Account: Cuenta[] = [];
  estados: number;

  newAccount(cuenta, carnet, saldo, tipo, estado, ): Cuenta{
    return {
      no_cuenta: cuenta,
      estado: estado,
      saldo: saldo,
      tipo_id: tipo,
      usuario_carnet: carnet
    }
  }

  constructor(private route: ActivatedRoute, private global: GlobalService, private accountService: CuentaService,
              private router : Router) {
  }

  async ngOnInit(){
    await delay(500);
    this.sub = this.route.params.subscribe(params => {
      this.global.carne = +params['carnet'];
      this.accountService.getAccounts(this.global.carne).subscribe(
          (res: Cuenta[]) => {
            this.Account = res;
            console.log(res);
            this.estados = +res[0].estado
          },
          err => console.error(err)
      )
    })

    await delay(500);
    console.log(this.estados);

    if (this.estados === 2){
      this.router.navigate([`/reinscripcion-a`])
    }

  }

  Historial(){
    this.router.navigate([`/historial-cuenta/${this.global.carne}`])
  }


}
function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}
