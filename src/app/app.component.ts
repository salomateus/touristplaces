import { Component } from '@angular/core';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA9h7yXWuKwW07osly9aFGtqPtP7AIjYjY",
  authDomain: "tourist-places-2a65c.firebaseapp.com",
  databaseURL: "https://tourist-places-2a65c.firebaseio.com",
  projectId: "tourist-places-2a65c",
  storageBucket: "tourist-places-2a65c.appspot.com",
  messagingSenderId: "1043471549542"
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

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

  Adescuento:number=1;
  Hdescuento:number=0;

  constructor() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log('Sesion iniciada');
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        console.log(email);
        // ...
      } else {
        console.log('Sesion no iniciada');
        // User is signed out.
        // ...
      }
    });
  }
}