import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class AuthModule {}
