import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { CustomNotificationItem, NotificationItem } from "./notification-item";

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private _notifications: NotificationItem[] = [];
  private _subject = new BehaviorSubject<NotificationItem[]>([]);
  readonly notifications = this._subject.asObservable();

  constructor() { }

  private emit(
    role: 'default' | 'info' | 'success' | 'alert' | 'danger',
    title: string,
    content?: string,
    customContentTemplate?: TemplateRef<any>) {

    let notification: CustomNotificationItem = {
      role: role,
      title: title,
      content: content,
      customContentTemplate: customContentTemplate ?? null
    };

    this._notifications.push(notification);
    this._subject.next(this._notifications);
  }

  public show(title: string, content?: string, customContentTemplate?: TemplateRef<any>) {
    this.emit('default', title, content, customContentTemplate)
  }

  public info(title: string, content?: string, customContentTemplate?: TemplateRef<any>) {
    this.emit('info', title, content, customContentTemplate)
  }

  public success(title: string, content?: string, customContentTemplate?: TemplateRef<any>) {
    this.emit('success', title, content, customContentTemplate)
  }

  public alert(title: string, content?: string, customContentTemplate?: TemplateRef<any>) {
    this.emit('alert', title, content, customContentTemplate)
  }

  public error(title: string, content?: string, customContentTemplate?: TemplateRef<any>) {
    this.emit('danger', title, content, customContentTemplate)
  }

}
