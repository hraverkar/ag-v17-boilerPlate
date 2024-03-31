import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '../../modules/material/material.module';
import { LogoComponent } from '../logo/logo.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from '../../component/dashboard/dashboard.component';
import { ForgotPasswordComponent } from '../../component/forgot-password/forgot-password.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, LogoComponent, LoginComponent, RegisterComponent,DashboardComponent, ForgotPasswordComponent ],
  imports: [CommonModule, RouterLink, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [NavbarComponent, FooterComponent, LogoComponent, LoginComponent, RegisterComponent, DashboardComponent, ForgotPasswordComponent],
})
export class CoreModuleModule {}
