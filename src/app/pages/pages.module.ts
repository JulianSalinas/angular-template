import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthModule } from "../auth/auth.module";

@NgModule({
  declarations: [
    DashboardComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    AuthModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class PagesModule { }
