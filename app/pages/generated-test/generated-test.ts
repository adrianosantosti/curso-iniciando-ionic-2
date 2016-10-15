import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ConnectionService} from './../../providers/connection-service/connection-service';


@Component({
  templateUrl: 'build/pages/generated-test/generated-test.html',
})
export class GeneratedTestPage {
  constructor(private nav: NavController, private connectionService: ConnectionService) {}

  BuscarCep() : void {
    this.connectionService.getCep('08295300')
      .then((res) => {
        let json = res.json();
        console.log(json);
      }).catch((erro) =>
      {
        console.log(erro);
      });
  }


}
