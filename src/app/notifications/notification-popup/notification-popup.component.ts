import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { CustomNotificationItem, NotificationItem } from "../notification-item";

@Component({
  selector: 'app-notification-popup[notification]',
  templateUrl: './notification-popup.component.html',
  styleUrls: ['./notification-popup.component.css']
})
export class NotificationPopupComponent implements OnInit {

  @Input()
  notification: NotificationItem | undefined;

  @Input()
  customContentTemplate: TemplateRef<any> | null = null;

  constructor() { }

  ngOnInit(): void { }

  close(): void {
    console.log('Closing notification');
  }

}
