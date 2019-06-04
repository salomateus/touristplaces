import { Injectable } from '@angular/core';
import{ Descuentos } from '../modelo/descuentos';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DescuentosService {

  DescuentosCollection: AngularFirestoreCollection<Descuentos>;
  descuentos: Observable<Descuentos[]>;  
  DescuentosDoc: AngularFirestoreDocument<Descuentos>;

  constructor(private afs: AngularFirestore) {
    this.DescuentosCollection = afs.collection<Descuentos>('Descuentos');
    this.descuentos = this.DescuentosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a =>{
        const data = a.payload.doc.data() as Descuentos;
        const id = a.payload.doc.id;
        return{id, ...data};
      }))
    )
   }

   ListaItems(){
     return this.descuentos;
   }
}
