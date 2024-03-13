import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  public clickSocialMedia(value: string): void {
    switch (value) {
      case 'email':
        window.open('mailto:harshalraverkar@gmail.com', '_blank');
        break;
      case 'github':
        window.open('https://github.com/hraverkar', '_blank');
        break;
      case 'linkedin':
        window.open('https://linkedin.com/in/haverkar', '_blank');
        break;
      case 'google':
        window.open('https://linkedin.com/in/haverkar', '_blank');
        break;
      default:
        break;
    }
  }
}
