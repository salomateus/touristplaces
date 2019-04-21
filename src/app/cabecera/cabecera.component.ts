import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
  
})
export class CabeceraComponent implements OnInit {
  show:boolean = false;
  home:number;
  profile:number = 0;
  ayuda:number = 0;
  descuento:number = 0;
  actualizacion:number=0;
  turismo:number=0;
  solicitud:number=0;
  turismop1:number=0;
  turismop2:number=0;
  turismop3:number=0;

  Adescuento:number=1;
  Hdescuento:number=0;
  constructor() { 
    this.home = 1;
  }

  cerr(){
    firebase.auth().signOut()
    .then(function(){
      console.log("saliendo...")
    })
    .catch(function(error){
      console.log(error)
    })
  }

  static Dentro(){

    var contenido = document.getElementById("conten");
    contenido.innerHTML = `
    <div> USUARIO GENERICO  </div>
    <div  (click)="this.cerr()"><button type="button"> CERRAR SESIÓN </button></div>
    
    `;
  }

  static fuera(){
    var contenido = document.getElementById("conten");
    contenido.innerHTML = `
    <div><button class="butlogin"  type="button" data-toggle="modal" data-target="#myModal"> INICIAR SESIÓN </button></div>
    <div class="butRegister"  type="button1"data-toggle="modal" data-target="#myModal2"> ¿No tienes usuario?   <br> Registrate  </div>
    `;
  }


  ngOnInit() {
  }

}
