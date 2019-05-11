import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ConexionService } from '../services/conexion.service';


@Component({
  selector: 'app-descuentos',
  templateUrl: './descuentos.component.html',
  styleUrls: ['./descuentos.component.css']
})

export class DescuentosComponent implements OnInit {

  MusNa:any;

  constructor(private conexion:ConexionService) {
    
   }

  info(){
    
    var iden1 = (<HTMLInputElement>document.getElementById('sel1')).value;
    var iden2 = (<HTMLInputElement>document.getElementById('ID')).value;
    
    this.conexion.ListaItem().subscribe(item=>{
      var com = item;
      var tamaño = item.length;
      console.log(com);
      console.log(tamaño);

      var prueba = com[0];
      var prueba2 = iden2;

      console.log(prueba2);
      console.log(prueba);

      if(prueba2 == prueba['NDI']){
        console.log("ESTE USUARIO TIENE EL MISMO NUMERO DE DOCUMENTO");
      }else{
        console.log("USUARIO EQUIVOCADO");
      }
    });

     /*
    var iden3 = firebase.database().ref('MusNal');
   
    iden3.on('child_added',function(data){
      console.log(data.val().TDI);
    });
    */
    console.log(iden1);
    console.log(iden2);
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
