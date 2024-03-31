import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    public router: Router,
    public ngZone: NgZone
  ) {}

  public userData: any;

  public signUp(email: string, password: string) {
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.SendVerificationMail();
        this.SetUserData(result.user);
      })
      .catch((error) => {
        // an error occurred
        window.alert(error.message);
      });
  }

  public SendVerificationMail() {
    return this.afAuth.currentUser
      .then((us: any) => {
        us.sendEmailVerification();
      })
      .then(() => {
        this.router.navigate(['verify-email-address']);
      });
  }

  public login(email: string, password: string) {
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        // sign up successful
        this.SetUserData(result.user);
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            this.router.navigate(['dashboard']);
          }
        });
      })
      .catch((error) => {
        // an error occurred
        window.alert(error.message);
      });
  }

  public logout() {
    this.afAuth
      .signOut()
      .then(() => {
        // sign up successful
        localStorage.removeItem('user');
        this.router.navigate(['login']);
      })
      .catch((error) => {
        // an error occurred
        window.alert(error.message);
      });
  }

  public get isAuthenticated(): boolean {
    return this.afAuth.currentUser !== null;
  }

  public GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }

  public async AuthLogin(provider: any) {
    try {
      const result = await this.afAuth.signInWithPopup(provider);
      console.log('You have been successfully logged in !!');
      this.router.navigate(['dashboard']);
    } catch (error) {
      console.log(error);
    }
  }

  public SaveUserDetails() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else if (localStorage.length >= 1) {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  public ForgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check the inbox');
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  public get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }

  public SetUserData(user: firebase.User) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.phoneNumber,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
}
