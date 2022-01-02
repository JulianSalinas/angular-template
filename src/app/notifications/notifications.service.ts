import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { NotificationItemWithKey, NotificationOptions } from "./notification-item";
import { Guid } from "guid-typescript";

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private _notifications: NotificationItemWithKey[] = [];
  private _subject = new BehaviorSubject<NotificationItemWithKey[]>([]);
  readonly notifications = this._subject.asObservable();

  constructor() { }

  private emit(notification: NotificationItemWithKey) {
    this._notifications.push(notification);
    this._subject.next(this._notifications);
  }

  public show(
    title: string,
    content: string | TemplateRef<any> | null,
    role: 'default' | 'info' | 'success' | 'alert' | 'danger',
    options?: NotificationOptions) {

    // Can't contain more than 5 notifications
    if (this._notifications.length >= 5) {
      this._notifications.shift();
    }

    // A key is assigned which is useful to delete
    let notification: NotificationItemWithKey = {
      key: Guid.create().toString(),
      title: title,
      content: content,
      role: role,
      options: options
    }

    // To delete the notification after some time has passed
    console.log(`Message with key ${notification.key} was created!`);

    if(!notification.options)
      setTimeout(() => this.close(notification.key), 5000);

    else if (typeof notification.options.timeout === 'number')
      setTimeout(() => this.close(notification.key), notification.options.timeout);

    this.emit(notification)
  }

  public info(title: string, content: string | TemplateRef<any> | null, options?: NotificationOptions) {
    this.show(title, content, 'info', options);
  }

  public success(title: string, content: string | TemplateRef<any> | null, options?: NotificationOptions) {
    this.show(title, content, 'success', options);
  }

  public alert(title: string, content: string | TemplateRef<any> | null, options?: NotificationOptions) {
    this.show(title, content, 'alert', options);
  }

  public danger(title: string, content: string | TemplateRef<any> | null, options?: NotificationOptions) {
    this.show(title, content, 'danger', options);
  }

  public close(key: string) {
    this._notifications = this._notifications.filter(n => n.key !== key);
    this._subject.next(this._notifications);
  }

}
