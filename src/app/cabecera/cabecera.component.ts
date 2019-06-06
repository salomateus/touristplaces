import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router} from '@angular/router'
import { Location } from '@angular/common';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
  
})
export class CabeceraComponent implements OnInit {
  

  constructor(public _router: Router, public _location: Location) {
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
    (<HTMLInputElement>document.getElementById("bPerfil")).disabled = false;
    

    firebase.auth().onAuthStateChanged(function(user) {
      if(user){
        let idU = user.uid;
        let nombre = user.email;
        document.getElementById('cont2').innerHTML = nombre;
      }
    });

  }

  static fuera(){
    console.log("Sesupone que estamos afuera");
    document.getElementById('cont1').style.display = 'none';
    document.getElementById('cont2').style.display = 'none';
    document.getElementById('cont3').style.display = 'block';
    document.getElementById('cont4').style.display = 'block';
    (<HTMLInputElement>document.getElementById("bPerfil")).disabled = true;
    document.getElementById('cont2').innerHTML = `AQUI NO HAY NADA QUE VER 7u7`;
  }

 

  ngOnInit() {
  
    }
  }


