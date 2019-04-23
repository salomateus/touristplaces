import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})

export class RegistrarseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  registrar(){
    var nombre = (<HTMLInputElement>document.getElementById("Nombre")).value; 
    var DI = (<HTMLInputElement>document.getElementById("DI")).value; 
    var ciudad = (<HTMLInputElement>document.getElementById("Ciudad")).value; 
    var contrasena = (<HTMLInputElement>document.getElementById("Cont")).value; 
    var contrasena2 = (<HTMLInputElement>document.getElementById("Cont1")).value; 

    firebase.auth().createUserWithEmailAndPassword(nombre,contrasena).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ...
      
    });
  }

}
