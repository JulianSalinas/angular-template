import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationPopupComponent } from './notification-popup/notification-popup.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NotificationContainerComponent } from './notification-container/notification-container.component';
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
  declarations: [
    NotificationPopupComponent,
    NotificationContainerComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule,
  ],
  exports: [
    NotificationPopupComponent,
    NotificationContainerComponent
  ]
})
export class NotificationsModule { }
