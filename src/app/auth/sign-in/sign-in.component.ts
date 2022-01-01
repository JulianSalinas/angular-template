import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  isSigningIn: boolean = true;

  validators = [Validators.required, Validators.maxLength(24)];

  signInForm = this.formBuilder.group({

    email: ['', [
      Validators.required,
      Validators.maxLength(50)]],

    password: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(50)]],

    rememberMe: [false]
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService) { }

  ngOnInit(): void { }

  async signIn(): Promise<void> {

    if (!this.signInForm.valid) {
      this.signInForm.markAllAsTouched();
      return;
    }

    let email = this.signInForm.get('email')?.value as string;
    let password = this.signInForm.get('password')?.value as string;

    try {
      this.signInForm.disable();
      await new Promise(r => setTimeout(r, 1000));
      await this.authService.signIn(email.trim(), password.trim());
      await this.router.navigate(['dashboard']);
    } catch (error) {
      this.signInForm.enable();
      console.log('Sign In Error:', error);
    }

  }

  async googleSignIn(): Promise<void> {
    try {
      await this.authService.googleSignIn();
      await this.router.navigate(['dashboard']);
    } catch (error) {
      console.log('Google Sign In Error:', error);
    }
  }

}
