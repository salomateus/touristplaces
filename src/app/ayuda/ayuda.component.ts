import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Mensaje_usuarios } from '../modelo/Mensaje_usuarios';
import{MensajeUsuarioService} from '../services/mensaje-usuario.service'
import{ NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.css']
})
export class AyudaComponent implements OnInit {
  mensaje: Mensaje_usuarios = {
    correo: '',
    nombre: '',
    message:''
  };
  constructor(private  Serviciomensajeusuario: MensajeUsuarioService) { 
  }
  enviar( messageForm:NgForm){

    var nombre = (<HTMLInputElement>document.getElementById("name")).value; 
    var correo = (<HTMLInputElement>document.getElementById("email")).value; 
    var mensajehtml = (<HTMLInputElement>document.getElementById("message")).value; 
    this.Serviciomensajeusuario. InsertarMensaje(this.mensaje);
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Se ha enviado mensaje',
      showConfirmButton: false, 
      timer: 2000 
    })
}
  ngOnInit() {
  }

}
