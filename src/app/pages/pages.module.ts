import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthModule } from "../auth/auth.module";
import { SharedModule } from "../shared/shared.module";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
  declarations: [
    DashboardComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthModule,
    AppRoutingModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class PagesModule { }
