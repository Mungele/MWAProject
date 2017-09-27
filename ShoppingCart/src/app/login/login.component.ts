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
import {DbService} from "../db.service";

interface UserInfo {
  UserName: String,
  firstName:String,
  lastName : String,
  email: String
}

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
  userInfo: UserInfo;

  constructor(public af: AngularFireDatabase, public afAuth: AngularFireAuth, public db : DbService ) {
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
      .then(res => {
        console.log(res)
      });
    this.afAuth.authState.subscribe(user=>
    {
      if (!user){
        this.name = null;
        return;
      }

      this.name =user.displayName;
      console.log(user);
      let names = this.name.split(" ");
      console.log(names);
      this.userInfo={'UserName': user.displayName,
        'firstName':names[0],
        'lastName' : names[1],
        'email': user.email};
      this.saveUser();
    });



  }


  logout() {
    this.afAuth.auth.signOut();
  }

  //create the JWT and save it in local storage
  saveUser(){
    this.db.saveUser(this.userInfo);



  }

  chatSend(theirMessage: string) {
    this.items.push({ message: theirMessage, name:this.name });
    this.msgVal = '';
  }
  ngOnInit() {
  }

}
