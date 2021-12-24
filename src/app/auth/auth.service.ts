import { Injectable } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { Router } from '@angular/router';
// import firebase from 'firebase/compat/app';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User = {
    uid: 'asdasd',
    displayName: 'Julian Salinas',
    email: 'july12sali@gmail.com',
    photoURL: 'https://pics.me.me/thumb_45993-anime-forum-avatars-profile-photos-avatar-abyss-51102772.png',
    emailVerified: true,
  };

  //constructor(private auth: AngularFireAuth, private router: Router) { }

  async signIn(email: string, password: string): Promise<User> {

    // let result = await this.auth.signInWithEmailAndPassword(email, password);

    // if(result.user == null)
    //   throw 'User not authenticated';

    // let user: User = {...result.user };

    return this.user;
  }

  async signUp(email: string, password: string): Promise<User> {
    
    // let result = await this.auth.createUserWithEmailAndPassword(email, password);

    // if(result.user == null)
    //   throw 'User not signed up';

    // let user: User = {...result.user };

    return this.user;
  }

  async googleSignIn(): Promise<User> {

    // const provider = new firebase.auth.GoogleAuthProvider();
    
    // let result = await this.auth.signInWithPopup(provider);

    // if(result.user == null)
    //   throw 'User not authenticated';

    // let user: User = {...result.user };

    return this.user;
  }

  async signOut(): Promise<void> {
    // return this.auth.signOut();
  }

}
