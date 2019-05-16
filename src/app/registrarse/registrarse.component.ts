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
    correo: '',
    nombre: '',
    ciudad: '',
    num_identificacion: ''
  };

  constructor(private personaService: PersonaService) { 

    this.personaService.ListaItem().subscribe(item=>{
      var com = item;
      var tamaño = item.length;
      var pos0 = item[0].nombre;
      console.log(com);
      console.log(tamaño);
      console.log(pos0)
    });
  }
 
  registrar(personaForm: NgForm){

      var nombre = (<HTMLInputElement>document.getElementById("Nombre")).value; 
      var contrasena = (<HTMLInputElement>document.getElementById("contras")).value; 
      var errorc = true;

      firebase.auth().createUserWithEmailAndPassword(nombre,contrasena).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        
        console.log(errorCode);
        console.log(errorMessage);

        if(error.code || error.message){
          errorc = false;
          if(errorCode){
            alert(errorCode)
            }
            if(errorMessage){
              alert(errorMessage)  
            }
          }else{
            alert("CORREO CREADO CON EXITO");
          }

      });    

      if(errorc){
      this.personaService.InsertarPersona(this.personas);
       Swal.fire({
          position: 'top-end',
          type: 'success',
          title: 'creado con exito',
          showConfirmButton: false, 
          timer: 2000 
        })
    }

    }
}
