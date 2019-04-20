import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { userInfo } from 'os';

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
    var nombre = document.getElementById('Nombre').value;
    var DI = document.getElementById('DI').value;
    var ciudad = document.getElementById('Ciudad').value;
    var contrasena = document.getElementById('Cont').value;
    var contrasena2 = document.getElementById('Cont1').value;

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
