import { CommonModule } from '@angular/common';

//import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { SharedModule } from '../shared/shared.module';
import { AuthCardComponent } from './auth-card/auth-card.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { AppRoutingModule } from '../app-routing.module';
import { TranslocoRootModule } from "../transloco-root.module";

@NgModule({
  declarations: [SignInComponent, AuthCardComponent, SignUpComponent, AuthPageComponent],
  imports: [
    AppRoutingModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    TranslocoRootModule
    //AngularFireAuth
  ],
})
export class AuthModule {}
