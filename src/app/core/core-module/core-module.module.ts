import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '../../modules/material/material.module';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [CommonModule, RouterLink, MaterialModule],
  exports: [NavbarComponent, FooterComponent],
})
export class CoreModuleModule {}
