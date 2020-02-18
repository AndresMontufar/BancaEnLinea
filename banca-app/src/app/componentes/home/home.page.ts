import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GlobalService} from '../../servicios/global.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public sub;

  constructor(private route: ActivatedRoute, private global: GlobalService) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.global.carne = +params['carnet'];
    })
  }


}
