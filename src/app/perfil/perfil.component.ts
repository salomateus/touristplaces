import { Component, OnInit } from '@angular/core';
import { Personas } from '../modelo/Personas';
import{PersonaService} from '../services/persona.service';
 
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  personas: Personas[];

  constructor(private personaService: PersonaService) { }

  ngOnInit() {

    this.personaService.ListaItem().subscribe(personas =>{
      this.personas = personas;
      var com = personas;
      var tamaño = personas.length;
      console.log(com);
      console.log(tamaño);
    })

  }

}
