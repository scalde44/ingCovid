import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  nuevosCasos:any;
  totalCasos:any;
  nuevasMuertes:any;
  totalMuertes:any;
  nuevosRecuperados:any;
  totalRecuperados:any;
  cargando:boolean=true;
  constructor(private _global:GlobalService) {
    this._global.getGlobal()
    .subscribe(
      (data:any)=>{
        this.nuevosCasos=(data.NewConfirmed);
        this.totalCasos=(data.TotalConfirmed);
        this.nuevasMuertes=(data.NewDeaths);
        this.totalMuertes=(data.TotalDeaths);
        this.nuevosRecuperados=(data.NewRecovered);
        this.totalRecuperados=(data.TotalRecovered);
      }
    );
    this.cargando=false;
  }

}
