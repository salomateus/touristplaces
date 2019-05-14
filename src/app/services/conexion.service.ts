import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import{ Persona } from '../modelo/persona';
import { AngularFireList } from 'angularfire2/database';

export interface Item { name: String; }

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  constructor(private afs: AngularFirestore) {

    this.itemsCollection = afs.collection<Item>('MuseoN');
    this.items = this.itemsCollection.valueChanges();
   }

   ListaItem(){
     return this.items;
   }

}
