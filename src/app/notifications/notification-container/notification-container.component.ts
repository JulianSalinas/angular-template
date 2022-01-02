import { Component, OnInit } from '@angular/core';
import { NotificationsService } from "../notifications.service";
import { NotificationItemWithKey } from "../notification-item";

@Component({
  selector: 'app-notification-container',
  templateUrl: './notification-container.component.html',
  styleUrls: ['./notification-container.component.css']
})
export class NotificationContainerComponent implements OnInit {

  notifications: NotificationItemWithKey[] = [];

  constructor(private notificationsService: NotificationsService) { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.notificationsService.notifications.subscribe(notifications => this.notifications = notifications);
  }

}
