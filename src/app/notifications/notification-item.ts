import { TemplateRef } from "@angular/core";

export interface NotificationOptions {
  timeout: number | 'permanent',
}

export interface NotificationItem {
  title: string;
  content: string | TemplateRef<any> | null;
  role: 'default' | 'info' | 'success' | 'alert' | 'danger';
  options?: NotificationOptions
}

export interface NotificationItemWithKey extends NotificationItem {
  key: string;
}

