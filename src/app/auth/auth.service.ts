import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { User } from '../models/User';
//import { getRedirectResult, GoogleAuthProvider, signInWithRedirect } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  accessToken: string | undefined;

  user: User = {
    uid: 'asdasd',
    displayName: 'Julian Salinas',
    email: 'july12sali@gmail.com',
    photoURL: 'https://pics.me.me/thumb_45993-anime-forum-avatars-profile-photos-avatar-abyss-51102772.png',
    emailVerified: true,
  };

  constructor(private router: Router) { }

  async signIn(email: string, password: string): Promise<User> {

    // let result = await getAuth().signInWithEmailAndPassword(email, password);

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

  async googleSignIn(): Promise<void> {

    //let auth = this.auth;
    //console.log(auth);
    // let provider = new GoogleAuthProvider();

    // provider.addScope('profile');
    // provider.addScope('email');

    // await signInWithRedirect(auth, provider);

    // const result = await getRedirectResult(auth);

    // if(!result || result.user == null)
    //   throw 'User not authenticated';

    // let user: User = {...result.user };
    // let credential = GoogleAuthProvider.credentialFromResult(result);
    // this.accessToken = credential?.accessToken;

    // return user;
  }

  async signOut(): Promise<void> {
    // return this.auth.signOut();
  }

}
