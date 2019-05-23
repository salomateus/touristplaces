import { Component, OnInit } from '@angular/core';
import { Personas } from '../modelo/Personas';
import{PersonaService} from '../services/persona.service';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit {

  items: Observable<any[]>;
  personas: Personas[];

  constructor(private personaService: PersonaService, db: AngularFirestore) {

    this.items = db.collection('Usuarios').valueChanges();
    console.log("EL BOTON FUNCIONA");

    this.personaService.ListaItem().subscribe(item=>{
      console.log('entra a Lista Item');
      var com = item;
      var tamaño = item.length;
      var position = -1;
      var Usuario;
      console.log(com);
      console.log(tamaño);

      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {

          var VarNombre = document.getElementById('VarNombre');
          var VarDI = document.getElementById('VarDI');
          var VarCiudad = document.getElementById('VarCiudad');
          
          var email = user.email;

          for (let y = 0; y < tamaño; y++) {
            if(email == com[y].correo){
              y = tamaño;
            } 
            position++;
          }

          Usuario = com[position];
  
          console.log("laposicion es:" + position);
          console.log('PERFIL SI EXISTE, nombre '+ Usuario.nombre);
          console.log('Correo electronico '+ Usuario.correo);
          console.log('Numero De identificacion '+ Usuario.num_identificacion);
          console.log('Ciudad '+ Usuario.ciudad);

          VarNombre.innerHTML = `
          ${Usuario.nombre}
          `
          VarDI.innerHTML = `
          ${Usuario.num_identificacion}
          `
          VarCiudad.innerHTML = `
          ${Usuario.ciudad}
          `
    
        } else {
          console.log('PERFIL NO EXISTE');
        }

      });

    });

   }

   EditInfo(){
    
   }

  ngOnInit() {

  }

}
