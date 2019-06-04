import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { DescuentosService } from '../services/descuentos.service';
import { Descuentos } from '../modelo/descuentos';

@Component({
  selector: 'app-descuentos',
  templateUrl: './descuentos.component.html',
  styleUrls: ['./descuentos.component.css']
})

export class DescuentosComponent implements OnInit {

  descuentos : Descuentos[];

  constructor(private conexion: DescuentosService) {

    this.conexion.ListaItems().subscribe(item =>{
      this.descuentos = item;
      console.log(this.descuentos);
    })
   }

  info(){
 
  } 
  
  static Descuentos(){
    firebase.auth().onAuthStateChanged(function(user) {
      if(user){
        let nombre4 = user.email;

        if(nombre4=="museonacional@gmail.com"){
          console.log('ERES UN USUARIO DE SITIO TURISTICO');
        }else{
          console.log('ERES UN USUARIO NORMAL')
        }
      }

    });
  }

  ngOnInit() {
    
  }

}
