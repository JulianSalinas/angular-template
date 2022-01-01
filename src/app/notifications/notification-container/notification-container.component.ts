import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CustomNotificationItem, NotificationItem } from "../notification-item";
import { NotificationsService } from "../notifications.service";

@Component({
  selector: 'app-notification-container',
  templateUrl: './notification-container.component.html',
  styleUrls: ['./notification-container.component.css']
})
export class NotificationContainerComponent implements OnInit {

  @ViewChild('successContentTemplate')
  successContentTemplate: TemplateRef<any> | null = null;

  @ViewChild('errorContentTemplate')
  errorContentTemplate: TemplateRef<any> | null = null;

  notifications: CustomNotificationItem[] = [];

  constructor(private notificationsService: NotificationsService) { }

  ngOnInit(): void { }

  ngAfterViewInit() {

    this.notifications = [
      {
        title: 'Could not sign up',
        role: 'danger',
        customContentTemplate: this.errorContentTemplate
      },
      {
        title: 'Welcome',
        role: 'info',
        content: 'Notifications will appear here!',
        customContentTemplate: null
      }
    ];

    this.notificationsService.notifications.subscribe(notifications => {
      this.notifications = notifications.map(n => <CustomNotificationItem>n);
    });

    this.notificationsService.info('Welcome', 'Notifications will appear here!');


  }

}
