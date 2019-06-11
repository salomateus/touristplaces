import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router} from '@angular/router'
import { Location } from '@angular/common';
import {PersonaService} from'../services/persona.service'

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
  
})
export class CabeceraComponent implements OnInit {
  

  constructor(public _router: Router, public _location: Location, private personaService: PersonaService) {

    this.personaService.ListaItem().subscribe(item=>{
      var com = item;
      var tamaño = item.length;
      var position = -1;
      var Usuario;
      

      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {

          var email = user.email;

          for (let y = 0; y < tamaño; y++) {
            if(email == com[y].correo){
              y = tamaño;
            } 
            position++;
          }

          Usuario = com[position];

          if(Usuario.sitio == true){
            document.getElementById('btn_act').style.display = 'block';
            
          }else{
            document.getElementById('btn_act').style.display = 'none';
          }

        }else{
          document.getElementById('btn_act').style.display = 'none';
        }
      })
    })

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


