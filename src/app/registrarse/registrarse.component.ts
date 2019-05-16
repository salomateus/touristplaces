import { Component } from '@angular/core';
import * as firebase from 'firebase';
import{Personas} from '../modelo/personas';
import{PersonaService} from '../services/persona.service'
import{ NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})

export class RegistrarseComponent{

  personas: Personas = {
    keyRegistro: '',
    nombre: '',
    ciudad: '',
    num_identificacion: ''
  };

  constructor(private personaService: PersonaService) { 

    this.personaService.ListaItem().subscribe(item=>{
      var com = item;
      var tamaño = item.length;
      console.log(com);
      console.log(tamaño);
    });

   
  }
 
  registrar(personaForm: NgForm){

      this.personaService.InsertarPersona(this.personas);

      var nombre = (<HTMLInputElement>document.getElementById("Nombre")).value; 
      var contrasena = (<HTMLInputElement>document.getElementById("contras")).value; 
    
      firebase.auth().createUserWithEmailAndPassword(nombre,contrasena).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
        
      });

      Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'creado con exito',
        showConfirmButton: false, 
        timer: 2000 
      })
      

    }
}
