import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//Map
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private _http: HttpClient) { }

  getQuery(){
    const url=`https://api.covid19api.com/summary`;
    return this._http.get(url);
  }

  getGlobal(){
    return this.getQuery()
    .pipe(map((data) => {
      return data['Global'];
    }));
  }

  
}
