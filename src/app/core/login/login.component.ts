import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  public formData = {
    email: '',
    password: '',
  };
  submitted: boolean = false;
  public constructor(private authService: AuthService) {}

  public onSubmit() {
    this.submitted = true;
    this.authService.login(this.formData.email, this.formData.password);
  }

  public get isAuthenticated(): boolean {
    return this.authService.isAuthenticated;
  }

  public googleLogin(): void {
    this.authService.GoogleAuth();
  }
}
