import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '../../modules/material/material.module';
import { LogoComponent } from '../logo/logo.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, LogoComponent],
  imports: [CommonModule, RouterLink, MaterialModule],
  exports: [NavbarComponent, FooterComponent, LogoComponent],
})
export class CoreModuleModule {}
