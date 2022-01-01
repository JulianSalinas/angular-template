import { TemplateRef } from "@angular/core";

export interface NotificationItem {
  title: string;
  content?: string;
  role: 'default' | 'info' | 'success' | 'alert' | 'danger';
}

export interface CustomNotificationItem extends NotificationItem {
  customContentTemplate: TemplateRef<any> | null;
}
