import { Injectable } from '@angular/core';
import{ Personas } from '../modelo/Personas';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
 
@Injectable({
  providedIn: 'root'
})

export class PersonaService {

  PersonasCollection: AngularFirestoreCollection<Personas>;
  personas: Observable<Personas[]>;  
  PersonaDoc: AngularFirestoreDocument<Personas>;

  constructor(private afs: AngularFirestore) {
    this.PersonasCollection = afs.collection<Personas>('Usuarios');
    //this.personas = this.PersonasCollection.valueChanges();
    this.personas = this.PersonasCollection.snapshotChanges().pipe(
      map(actions => actions.map(a =>{
        const data = a.payload.doc.data() as Personas;
        const id = a.payload.doc.id;
        return{id, ...data};
      }))
    )
   }

   ListaItem(){
     return this.personas;
   }

   InsertarPersona(usuario: Personas){
     this.PersonasCollection.add(usuario);
   }

   EditarInformacion(usuario: Personas){
    this.PersonaDoc = this.afs.doc(`Usuarios/${usuario.id}`);
    this.PersonaDoc.update(usuario);
   }
 
}
