import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../../auth/auth.service";
import { NotificationsService } from "../../notifications/notifications.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild('successContentTemplate')
  successContentTemplate: TemplateRef<any> | null = null;

  @ViewChild('errorContentTemplate')
  errorContentTemplate: TemplateRef<any> | null = null;

  constructor(
    private router: Router,
    private authService: AuthService,
    private notificationsService: NotificationsService) { }

  ngOnInit(): void { }

  async signOut(): Promise<void> {
    await this.authService.signOut();
    await this.router.navigate(['']); // to sign-in
  }

  showNotification(): void {
    this.notificationsService.info('Welcome', 'Hellow world');
  }

  showError(): void {
    this.notificationsService.danger('Danger', this.errorContentTemplate);
  }

  showSuccess(): void {
    this.notificationsService.success('Success', this.successContentTemplate, { timeout: 'permanent' });
  }

}
