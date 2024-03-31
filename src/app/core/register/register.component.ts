import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  public formData = {
    email: '',
    password: '',
    name: '',
  };
  submitted: boolean = false;
  public constructor(private authService: AuthService) {}

  public onSubmit() {
    this.submitted = true;
    this.authService.signUp(this.formData.email, this.formData.password);
  }
}
