import { Component, OnInit } from '@angular/core';
import { Personas } from '../modelo/Personas';
import{PersonaService} from '../services/persona.service';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import{ NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit {

  items: Observable<any[]>;
  personas: Personas = {
    id: '',
    nombre: '',
    ciudad: '',
    num_identificacion: '',
    sitio: false
  };
  Usuarios: any;

  constructor(private personaService: PersonaService) {
   
    console.log("EL BOTON FUNCIONA");

    this.personaService.ListaItem().subscribe(item=>{
      this.Usuarios = item; 
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
          var vardesa = document.getElementById('Vardesa');
          
          var email = user.email;

          for (let y = 0; y < tamaño; y++) {
            if(email == com[y].correo){
              y = tamaño;
            } 
            position++;
          }

          Usuario = com[position];
    
          console.log("el _id de usuario="+Usuario.id);
  
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
          vardesa.innerHTML = `
          ${Usuario.correo}
          `

         
        } else {
          console.log('PERFIL NO EXISTE');
        }

      });

    });

   }

   EditInfo(){
    document.getElementById('msm').style.display = 'block';
    document.getElementById('nombre').style.display = 'block';
    document.getElementById('DI').style.display = 'block';
    document.getElementById('ciu').style.display = 'block';
    document.getElementById('ActInfo').style.display = 'block';
    document.getElementById('editar').style.display = 'none';
  
   }

   guardar(personaForm: NgForm){
     document.getElementById('ActInfo').style.display = 'none';
     document.getElementById('msm').style.display = 'none';
     document.getElementById('editar').style.display = 'block';
     document.getElementById('nombre').style.display = 'none';
     document.getElementById('DI').style.display = 'none';
     document.getElementById('ciu').style.display = 'none';
     ///////

     var contenedor = this.Usuarios;
     var tamaño = contenedor.length;
     var position=-1;

     for (let y = 0; y < tamaño; y++) {
      if(this.personas.num_identificacion == contenedor[y].num_identificacion){
        y = tamaño;
      } 
      position++;
    }

    if(contenedor[position].num_identificacion!= this.personas.num_identificacion){
      Swal.fire({
        position: 'top-end',
        type: 'error',
        title: 'ERROR AL ACTUALIZAR DATOS',
        text: 'El número de identidad ingresado no es el correcto',
        confirmButtonText: 'OK'
      })
    }else{

      console.log(this.personas.nombre);
    this.personas.id = contenedor[position].id;

    console.log(contenedor[position]);
    console.log(this.personas);

    this.personaService.EditarInformacion(this.personas);
    
    Swal.fire({
       position: 'top-end',
       type: 'success',
       title: 'Datos Actualizados Correctamente',
       text: 'Su información fue cambiada con exito !',
       confirmButtonText: 'Cool'
     })
  }
       }

  ngOnInit() {

  }

}
