import { CommonModule } from '@angular/common';

//import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AuthCardComponent } from './auth-card/auth-card.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [SignInComponent, AuthCardComponent, SignUpComponent, AuthPageComponent],
  imports: [
    AppRoutingModule,
    CommonModule, 
    SharedModule,
    FormsModule, 
    ReactiveFormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule,
    MatCheckboxModule,
    //AngularFireAuth
  ],
})
export class AuthModule {}
