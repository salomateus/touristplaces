import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Iniciar(){

    var nombre1 = (<HTMLInputElement>document.getElementById("Nombre1")).value; 
    var contrasena1 = (<HTMLInputElement>document.getElementById("Contrasena1")).value; 

    firebase.auth().signInWithEmailAndPassword(nombre1, contrasena1).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);

      if(error){
        if(error.code){
        alert(errorCode);
        }
        if(errorCode.message){
          alert(errorMessage);
        }
      }
      // ...
    });
  }
}
