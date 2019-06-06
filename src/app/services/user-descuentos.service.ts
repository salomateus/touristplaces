import { Injectable } from '@angular/core';
import { User_Descuento } from '../modelo/user_descuento';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class UserDescuentosService {

  UdesCollection: AngularFirestoreCollection<User_Descuento>;
  Udes: Observable<User_Descuento[]>;  
  UdesDoc: AngularFirestoreDocument<User_Descuento>;

  constructor(private afs: AngularFirestore) {

    this.UdesCollection = afs.collection<User_Descuento>('User_descuentos');

    this.Udes = this.UdesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a =>{
        const data = a.payload.doc.data() as User_Descuento;
        const id = a.payload.doc.id;
        return{id, ...data};
      }))
    )

   }

   ListaItem(){
    return this.Udes;
  }

  InsertarPersona(usuario: User_Descuento){
    this.UdesCollection.add(usuario);
  }

  remover(usuario: User_Descuento){
    this.UdesDoc = this.afs.doc(`User_descuentos/${usuario.id}`);
    this.UdesDoc.delete();
  }

}
