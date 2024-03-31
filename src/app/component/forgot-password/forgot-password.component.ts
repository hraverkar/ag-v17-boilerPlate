import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
})
export class ForgotPasswordComponent {
  public email: string;
  public constructor(private authService: AuthService) {}
  public ForgotPassword() {
    if (this.email !== null || this.email !== undefined) {
      this.authService.ForgotPassword(this.email);
    }
  }
}
