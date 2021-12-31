import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  private currentPassword: string = '';

  confirmPassword = (control: AbstractControl):  ValidationErrors | null => {
    return this.currentPassword === control.value ? null : { notSame: true }
  }

  passwordUpdated = (password: string): void => {

    this.currentPassword = password;

    let control = this.signUpForm.get('confirmation');

    this.signUpForm.get('password')?.valid
      ? control?.enable()
      : control?.disable();
  }

  signUpForm = this.formBuilder.group({

    email: ['', [
      Validators.required,
      Validators.email,
      Validators.maxLength(50)]],

    password: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(50)]],

    confirmation: [{ value: '', disabled: true }, [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(50),
      this.confirmPassword]]
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService) { }

  ngOnInit(): void {
    let passwordChange = this.signUpForm.get('password')?.valueChanges.subscribe(this.passwordUpdated);
  }

  async signUp(): Promise<void> {

    if (!this.signUpForm.valid) {
      this.signUpForm.markAllAsTouched();
      return;
    }

    let email = this.signUpForm.get('email')?.value as string;
    let password = this.signUpForm.get('password')?.value as string;

    try {
      this.signUpForm.disable();
      await new Promise(r => setTimeout(r, 1000));
      await this.authService.signUp(email.trim(), password.trim());
      await this.router.navigate(['dashboard']);
    } catch (error) {
      this.signUpForm.enable();
      console.log('Sign Up Error:', error);
    }

  }

}
