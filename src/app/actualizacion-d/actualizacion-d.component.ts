import { Component, OnInit } from '@angular/core';
import { Mensaje_Sitio } from '../modelo/Mensaje_Sitio';
import{ MessageSitieService} from '../services/message-sitie.service'
import{ NgForm } from '@angular/forms';
@Component({
  selector: 'app-actualizacion-d',
  templateUrl: './actualizacion-d.component.html',
  styleUrls: ['./actualizacion-d.component.css']
})
export class ActualizacionDComponent implements OnInit {
  mensaje1: Mensaje_Sitio = {
    sitio: '',
    mensaje: '',
    date:''
  };
  constructor(private  Serviciomensajesitio: MessageSitieService) { 
  }
  enviar( messageForm:NgForm){

    var sitio = (<HTMLInputElement>document.getElementById("Sitio")).value; 
    var mensaje = (<HTMLInputElement>document.getElementById("Mensaje")).value; 
    var date = (<HTMLInputElement>document.getElementById("Date")).value; 
    this.Serviciomensajesitio.InsertarMensaje(this.mensaje1);
   
}
  ngOnInit() {
  }

}
