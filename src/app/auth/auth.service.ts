import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  getRedirectResult,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { TranslocoService } from "@ngneat/transloco";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private auth: Auth,
    private translocoService: TranslocoService) { }

  async signIn(email: string, password: string): Promise<void> {
    try {
      let userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      console.log('Signed In: ', userCredential.user);
    } catch (e) {
      console.log('Sign In finished with error: ', e);
      throw e;
    }
  }

  async signUp(email: string, password: string): Promise<void> {
    try {
      let userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      console.log('Signed Up: ', userCredential.user);
    } catch (e) {
      console.log('Sign Up finished with error: ', e);
      throw e;
    }
  }

  async googleSignIn(): Promise<void> {

    let provider = new GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');

    try {
      this.auth.languageCode = this.translocoService.getActiveLang();
      console.log('Google Sign In set to ', this.auth.languageCode);

      if (this.auth.currentUser) {
        console.log('User is already Signed In');
        return;
      }

      await signInWithPopup(this.auth, provider);
      const userCredential = await getRedirectResult(this.auth);
      console.log('Signed In with Google: ', userCredential?.user);

    } catch (e) {
      console.log('Signed In with Google Error: ', e);
      throw e;
    }
  }

  async signOut(): Promise<void> {
    await signOut(this.auth);
  }

}
