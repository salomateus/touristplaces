import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})

export class RegistrarseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  registrar(){
    var nombre = document.getElementById('nombre').nodeValue;
    var DI = document.getElementById('DI').nodeValue;
    var ciudad = document.getElementById('Ciudad').nodeValue;
    var contraseña = document.getElementById('cont').nodeValue;
  }

}
