import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  rememberMe: boolean = false;

  signInForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.maxLength(24)]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(24)]],
    passwordConfirmation: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(24)]]
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

  async signUp(): Promise<void> {
    console.log("Navigating to Sign Up");
  }

}
