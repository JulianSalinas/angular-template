import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.maxLength(24)]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(24)]],
    passwordConfirmation: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(24)]]
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService) { }

  ngOnInit(): void { }

  async signUp(): Promise<void> {

    if (!this.signUpForm.valid) {
      this.signUpForm.markAllAsTouched();
      return;
    }

    let email = this.signUpForm.get('email')?.value as string;
    let password = this.signUpForm.get('password')?.value as string;

    try {
      await this.authService.signUp(email.trim(), password.trim());
      await this.router.navigate(['dashboard']);
    } catch (error) {
      console.log('Sign Up Error:', error);
    }

  }

}
