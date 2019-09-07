import { Component } from '@angular/core';
import { formatDate } from '@angular/common';
import { async } from 'q';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  textoEntrada: string;
  nombres: any[];
  nombreResultado: string;


  constructor() { }

  public ruleta() {
    this.nombres = this.textoEntrada.split(',');
    console.log(this.nombres);
    for (const nombre of this.nombres) {
      const i: number = Math.floor(Math.random() * this.nombres.length);
      console.log(this.nombreResultado);
      const seg = formatDate(Date.now(), 's', 'en-US').valueOf();
      while ( (seg + 1) > formatDate(Date.now(), 's', 'en-US').valueOf() ) {

        this.nombreResultado = this.nombres[i];
      }
    }
  }


}


