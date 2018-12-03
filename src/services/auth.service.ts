import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  private user: firebase.User;

  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => {
      this.user = user;
    });
  }

  signInWithEmail(credenciais) {
    return this.afAuth.auth.signInWithEmailAndPassword(credenciais.email,
      credenciais.password);
  }

  signUp(credenciais) {
    return this.afAuth.auth.createUserWithEmailAndPassword(credenciais.email,
      credenciais.password);
  }

  signOut(): Promise<void> {
    return this.afAuth.auth.signOut();
  }
}
