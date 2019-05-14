import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import{Persona} from '../modelo/persona';
import{PersonaService} from '../services/persona.service'

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})

export class RegistrarseComponent implements OnInit {
 personaList: Persona[];
  constructor(private personaService: PersonaService) { }

  ngOnInit() {
  }
 
  registrar(personaForm: NgForm){
    this.personaService.getPersona();
    this.personaService. insertPersona(personaForm.value);
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
