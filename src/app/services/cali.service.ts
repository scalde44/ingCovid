import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//Map
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CaliService {

  constructor(private _http: HttpClient) { }
  getQuery(busqueda:string) {
    const url = `https://www.datos.gov.co/resource/gt2j-8ykr.json`+busqueda;
    return this._http.get(url);
  }
  getCasos(){
    return this.getQuery(`?$where=ciudad_de_ubicaci_n=%27Cali%27`)
    .pipe(map((data) => {
      return data;
    }));
  }

  
}
