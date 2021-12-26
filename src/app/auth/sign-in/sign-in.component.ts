import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  rememberMe: boolean = false;

  signInForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.maxLength(24)]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(24)]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService) { }

  ngOnInit(): void {

  }

  async signIn(): Promise<void> {

    if (!this.signInForm.valid) {
      this.signInForm.markAllAsTouched();
      return;
    }

    console.log("Signing In...");
    let user = await this.authService.googleSignIn();
    console.log("Signed In: ", user);
  }

  async googleSignIn(): Promise<void> {
    console.log("Google Signing In...", this.signInForm.get('username')?.value);
    let user = await this.authService.googleSignIn();
    console.log("Google Signed In: ", user);
  }

  async navigateToSignUp(): Promise<void> {
    console.log("Navigating to Sign Up");
  }

}
