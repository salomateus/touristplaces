import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { DescuentosComponent } from './descuentos/descuentos.component' 


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

  constructor() {

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log('Sesion iniciada');
        // User is signed in.

        DescuentosComponent.Descuentos();
        CabeceraComponent.Dentro();
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
        CabeceraComponent.fuera();
        console.log('Sesion no iniciada');
        // User is signed out.
        // ...
      }
    });

  }
}