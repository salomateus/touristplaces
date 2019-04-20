import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TouristPlaces';
  show:boolean = true;
  Home:number = 1;
  profile:number = 0;
  ayuda:number = 0;
  descuento:number = 0;
  actualizacion:number=0;
  turismo:number=0;
  solicitud:number=0;
  turismop1:number=0;
  turismop2:number=0;
  turismop3:number=0;
}
