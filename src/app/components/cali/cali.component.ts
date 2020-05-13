import { Component, OnInit } from '@angular/core';
import { CaliService } from 'src/app/services/cali.service';

@Component({
  selector: 'app-cali',
  templateUrl: './cali.component.html',
  styleUrls: ['./cali.component.css']
})
export class CaliComponent {
  totalArray: any[] = [];
  muertesArray: any[] = [];
  recuperadosArray: any[] = [];
  cargando: boolean = true;
  constructor(private _cali: CaliService) {
    this._cali.getCasos()
      .subscribe(
        (data: any) => {
          this.totalArray = data;
          for (let index = 0; index < data.length; index++) {
            if(data[index].atenci_n=="Fallecido"){
              this.muertesArray.push(data[index]);
            }else if(data[index].atenci_n=="Recuperado"){
              this.recuperadosArray.push(data[index]);
            }
          }
        }
      );
    this.cargando = false;
  }
}
