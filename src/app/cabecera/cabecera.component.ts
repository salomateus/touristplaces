import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';
import { ISO8601_DATE_REGEX } from '@angular/common/src/i18n/format_date';

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
  public IO:number=0;
  public IS:number=0;

  Adescuento:number=1;
  Hdescuento:number=0;

  constructor() {
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
      let nombre = user.email;
      document.getElementById('cont2').innerHTML = nombre;
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

  nombre(){
   
  }

  ngOnInit() {
 /*
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        this.IS = 1;
        this.IO = 0;
        console.log(this.IS);
        console.log(this.IO);
      } else {
        this.IS = 0;
        this.IO = 1;
        console.log(this.IS);
        console.log(this.IO);
      }
    });
*/
    }
  }


