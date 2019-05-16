import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
  
})
export class CabeceraComponent implements OnInit {
  show1:boolean;
  show2:boolean;
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
  IO:number=0;
  IS:number=0;
  

  Adescuento:number=1;
  Hdescuento:number=0;

  constructor() {
    this.show1 = true;
    this.IO = 1;
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

    console.log("AL parecer estamosm dentro");
    document.getElementById('cont1').style.display = 'block';
    document.getElementById('cont2').style.display = 'block';
    document.getElementById('cont3').style.display = 'none';
    document.getElementById('cont4').style.display = 'none';

    firebase.auth().onAuthStateChanged(function(user) {
      if(user){
        let idU = user.uid;
        let nombre = user.email;
        document.getElementById('cont2').innerHTML = nombre;
        console.log("ID DEL USURIO =" + idU);
      }
    });

  }

  static fuera(){
    console.log("Sesupone que estamos afuera");
    document.getElementById('cont1').style.display = 'none';
    document.getElementById('cont2').style.display = 'none';
    document.getElementById('cont3').style.display = 'block';
    document.getElementById('cont4').style.display = 'block';
    document.getElementById('cont2').innerHTML = `AQUI NO HAY NADA QUE VER 7u7`;
  }

  ngOnInit() {

    }
  }


