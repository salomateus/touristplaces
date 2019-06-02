import { Injectable } from '@angular/core';
import { Mensaje_Sitio } from '../modelo/Mensaje_Sitio';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MessageSitieService {
  MensajeSCollection: AngularFirestoreCollection<Mensaje_Sitio>;
  mensajesitio: Observable<Mensaje_Sitio[]>;  
  MensajesDoc: AngularFirestoreDocument<Mensaje_Sitio>;

  constructor(private afs: AngularFirestore) {
    this.MensajeSCollection = afs.collection<Mensaje_Sitio>('MESSAGE_SITIO');
    this.mensajesitio = this.MensajeSCollection.snapshotChanges().pipe(
      map(actions => actions.map(a =>{
        const data = a.payload.doc.data() as Mensaje_Sitio;
        const id = a.payload.doc.id;
        return{id, ...data};
      }))
    )
   }

   ListaItem(){
     return this.mensajesitio;
   }
   InsertarMensaje( mensaje: Mensaje_Sitio){
     this.MensajeSCollection.add(mensaje);}
}

