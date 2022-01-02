import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { NotificationItemWithKey } from "../notification-item";
import { NotificationsService } from "../notifications.service";
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-notification-popup[notification]',
  templateUrl: './notification-popup.component.html',
  styleUrls: ['./notification-popup.component.css'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({ opacity: 1 })),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({ opacity: 0 }),
        animate(200)
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(400, style({ opacity: 0 })))
    ])
  ]
})
export class NotificationPopupComponent implements OnInit {

  @Input()
  notification: NotificationItemWithKey | undefined;

  customContentTemplate: TemplateRef<any> | null = null;

  constructor(private notificationsService: NotificationsService) { }

  ngOnInit(): void { }

  ngAfterContentInit() {
    if (!this.notification?.content || typeof this.notification?.content === 'string')
      return;

    this.customContentTemplate = this.notification.content;
  }

  close(key: string | undefined): void {
    if(typeof key !== 'string') return;
    this.notificationsService.close(key);
  }

}
