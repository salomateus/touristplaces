import { Injectable } from '@angular/core';
import { Mensaje_usuarios } from '../modelo/Mensaje_usuarios';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class MensajeUsuarioService {

  MensajeUCollection: AngularFirestoreCollection<Mensaje_usuarios>;
  mensajeusuario: Observable<Mensaje_usuarios[]>;  
  MensajeuDoc: AngularFirestoreDocument<Mensaje_usuarios>;

  constructor(private afs: AngularFirestore) {
    this.MensajeUCollection = afs.collection<Mensaje_usuarios>('MESSAGE_USER');
    this.mensajeusuario = this.MensajeUCollection.snapshotChanges().pipe(
      map(actions => actions.map(a =>{
        const data = a.payload.doc.data() as Mensaje_usuarios;
        const id = a.payload.doc.id;
        return{id, ...data};
      }))
    )
   }

   ListaItem(){
     return this.mensajeusuario;
   }

   InsertarMensaje(mensaje: Mensaje_usuarios){
     this.MensajeUCollection.add(mensaje);
   }
}
