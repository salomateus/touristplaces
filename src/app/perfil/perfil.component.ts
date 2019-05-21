import { Component, OnInit } from '@angular/core';
import { Personas } from '../modelo/Personas';
import{PersonaService} from '../services/persona.service';
import * as firebase from 'firebase';
 
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  personas: Personas[];

  constructor(private personaService: PersonaService) { }

   EditInfo(){

    console.log("EL BOTON FUNCIONA");

    var Uname;
    var Uemail;
    var Uciudad;
    var Undi;

    this.personaService.ListaItem().subscribe(item=>{
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
          Uname = Usuario.nombre;
          Uemail = Usuario.correo;
          Undi = Usuario.num_identificacion;
          Uciudad = Usuario.ciudad;
          

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

  ngOnInit() {

  }

}
