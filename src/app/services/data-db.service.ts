import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MessageI } from '../interface/message.interface';
@Injectable({
  providedIn: 'root'
})
export class DataDbService {
  private covidCollection: AngularFirestoreCollection<MessageI>;
  constructor(private afs:AngularFirestore) { 
    this.covidCollection=afs.collection<MessageI>('covid');
  }
  saveMessage(newCovid:any):void{
    this.covidCollection.add(newCovid);
  }
}
