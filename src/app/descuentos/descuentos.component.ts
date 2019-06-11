import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { DescuentosService } from '../services/descuentos.service';
import{PersonaService} from '../services/persona.service';
import { Descuentos } from '../modelo/descuentos';
import { Personas } from '../modelo/Personas';
import { User_Descuento } from '../modelo/user_descuento'
import { UserDescuentosService } from '../services/user-descuentos.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-descuentos',
  templateUrl: './descuentos.component.html',
  styleUrls: ['./descuentos.component.css']
})

export class DescuentosComponent implements OnInit {


  descuentos : Descuentos[];
  editState: boolean = false;
  descuentoToEdit: Descuentos[];
  Usuarios: any;
  contenedor: any;
  _Persona: Personas = {
    id: '',
    cant_descuentos: 0,
    adquirido: [],
  };
  container: Descuentos = {
    id: '',
    Lugar: '',
  };
  Udes: User_Descuento={
    num_identificacion: '',
    sitio: '',
  };

  constructor(private conexion: DescuentosService,
     private personaService: PersonaService, private UdesService: UserDescuentosService) {

   
      this.UdesService.ListaItem().subscribe(item=>{
        this.contenedor = item;
      })  
      

    this.personaService.ListaItem().subscribe(item=>{
      this.Usuarios = item;
      var com = item;
      var tamaño = item.length;
      var position = -1;
      var Usuario;
      

      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {

          var NO = document.getElementById('No_dsc');
          var SI = document.getElementById('Si_dsc');
          var canti= document.getElementById('canti');
          var name_adquirido = document.getElementById('name_adquirido');
          
          var email = user.email;

          for (let y = 0; y < tamaño; y++) {
            if(email == com[y].correo){
              y = tamaño;
            } 
            position++;
          }

          Usuario = com[position];

          if(Usuario.sitio == true){
            console.log("En descuentos se detecta que el usuario es AMD_TURISMO");
            document.getElementById('Parte1').style.display = 'none';
            
          }else{
            console.log("En descuentos se detecta que el usuario es NORMAL");
            document.getElementById('Parte2').style.display = 'none';
          }

          canti.innerHTML=`
          ${Usuario.cant_descuentos} / 5
          `
         
          if(Usuario.cant_descuentos == 0){
            NO.style.display = 'block';
            SI.style.display = 'none';
   
          }else{
            NO.style.display = 'none';
            SI.style.display = 'block';

            name_adquirido.innerHTML=`
            ${Usuario.adquirido} 
            `
           
          }
        }
      })
    })
    

    this.conexion.ListaItems().subscribe(item =>{
      this.descuentos = item;
      console.log(this.descuentos);
    })

   }

   accesState(dsc: Descuentos[]){
    this.editState = true;
    this.descuentoToEdit = dsc;
  }

  clearState(){
    
    this.editState = false;
    this.descuentoToEdit = null;
  }


  Confirmar(dsc: Descuentos[], lugar: string){
    var _users = this.Usuarios;
    var tamaño = _users.length;
    console.log(_users); 
    this.descuentoToEdit = dsc;
    var position = -1;
    var Usuario;
    console.log(lugar);
    
    var user = firebase.auth().currentUser;
    var email= user.email;
        
        for (let y = 0; y < tamaño; y++) {
          if(email == _users[y].correo){
            y = tamaño;
          } 
          position++;
        }

        Usuario = _users[position];

        if(Usuario.cant_descuentos>=5){
         
          Swal.fire({
            position: 'center',
            type: 'error',
            title: 'No se completo el proceso',
            text: 'NO SE PUEDEN ADQUIRIR MAS DESCUENTOS, USTED TIENE EL MÁXIMO POSIBLE',
            confirmButtonText: 'OK'
          })
          

        }else{

          let desu: Array<string>;
          desu = Usuario.adquirido;
          var tamaño2 = desu.length;
          var position2 = -1;
          console.log("abrite ome!")
          console.log(desu); 

          for (let y = 0; y < tamaño2; y++) {
            if(lugar == desu[y]){
              y = tamaño;
              position = 7;
            } 
            position2++;
          }


          if(position==7){
            Swal.fire({
              position: 'center',
              type: 'error',
              title: 'Accion Cancelada',
              text: 'Usted ya adquirio este descuento, no puede adquirirlo 2 veces',
              confirmButtonText: 'OK'
            })
          }else{
            //INSERTAR EN LOS DESCUENTOS ADQUIRIDOS POR EL USUARIO. Base de datos 'Usuarios'
          var numero = Usuario.cant_descuentos;
          numero = numero+1;
          console.log('el numero:');
          console.log(numero);
          this._Persona.cant_descuentos = numero; 
          console.log('cantidad descuentos:');
          console.log( this._Persona.cant_descuentos);
          this._Persona.id = Usuario.id; 
          this._Persona.adquirido.push(lugar);
          this.personaService.EditarInformacion(this._Persona);


            //INSERTAR EN LA BASE DE TODOS LOS DESCUENTOS ADMINISTRADORES DE SITIO
          this.Udes.sitio = lugar;
          this.Udes.num_identificacion = Usuario.num_identificacion;
          this.UdesService.InsertarPersona(this.Udes);
          

          Swal.fire({
            position: 'center',
            type: 'success',
            title: 'Completado',
            text: 'La adquisición del descuento ha sido completada',
            confirmButtonText: 'OK'
          })
        }
          
        }

      
      this.editState = false;
      this.descuentoToEdit = null;
  } 

  verificar(){
    var _udes = this.contenedor;
    var tamaño = _udes.length;
    var position = -1;
    console.log(_udes);
    
    var n_iden = (<HTMLInputElement>document.getElementById("ID")).value; 
    var lugar = (<HTMLInputElement>document.getElementById("sel1")).value; 

    console.log(n_iden);
    console.log(lugar);

    for (let y = 0; y < tamaño; y++) {
      if(lugar == _udes[y].sitio && n_iden == _udes[y].num_identificacion){
        y = tamaño;
      } 
      position++;
    }

    var fin = _udes[position];

    if(fin.sitio == lugar && fin.num_identificacion == n_iden){

      var _users = this.Usuarios;
    var tamaño2 = _users.length;
    var position2 = -1;
    var Usuario;
    console.log(lugar);
    
    var user = firebase.auth().currentUser;
    var email= user.email;
        
        for (let y = 0; y < tamaño2; y++) {
          if(email == _users[y].correo){
            y = tamaño2;
          } 
          position2++;
        }

        Usuario = _users[position2];

        this._Persona.id = Usuario.id;
        var num = Usuario.cant_descuentos;
        num = num - 1;
        this._Persona.cant_descuentos= num;
        this.personaService.EditarInformacion(this._Persona);

        this.Udes.id = fin.id;
        this.Udes.sitio = fin.sitio;
        this.Udes.num_identificacion = fin.num_identificacion;
        this.UdesService.remover(this.Udes);

      Swal.fire({
        position: 'center',
        type: 'success',
        title: 'COMROBADO',
        text: 'EL visitante si aparece en la base de datos, Generando Entrada con descuento....',
        confirmButtonText: 'OK'
      })
    }else{
      Swal.fire({
        position: 'center',
        type: 'error',
        title: 'COMROBADO',
        text: 'El visitante no aparece en nuestra base de datos, compruebe los datos',
        confirmButtonText: 'OK'
      })
    }
  }
  
 
  ngOnInit() {
    
  }

}
