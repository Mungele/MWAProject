import { Component, OnInit } from '@angular/core';

// for auth
import { AngularFireAuth } from 'angularfire2/auth';
// for Observables
import {FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
// for database
import { AngularFireDatabase } from 'angularfire2/database';
// for Observables
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  title = 'app';
  items: FirebaseListObservable<any>;
  user: Observable<firebase.User>;
  name:any;
  msgVal: string = '';

  constructor(public af: AngularFireDatabase, public afAuth: AngularFireAuth ) {
    this.items = af.list('/messages', {
      query: {
        limitToLast: 50
      }
    });

    this.user = this.afAuth.authState;

    this.afAuth.authState.subscribe(user=>
    {
      if (!user){
        this.name = null;
        return;
      }

      this.name =user.displayName;
    });

  }

  loginfb() {
    this.afAuth.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider())
      .then(res => console.log(res));
  }

  loginEmail() {
    this.afAuth.auth.signInWithCredential( new firebase.auth.FacebookAuthProvider())
      .then(res => console.log(res));
  }

  logout() {
    this.afAuth.auth.signOut();
  }


  chatSend(theirMessage: string) {
    this.items.push({ message: theirMessage, name:this.name });
    this.msgVal = '';
  }
  ngOnInit() {
  }

}
