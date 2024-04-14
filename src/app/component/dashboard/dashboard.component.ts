import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user';
import {user} from "@angular/fire/auth";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  public constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.fetchData();
  }
  public signOut(): void {
    this.authService.logout();
  }
  public fetchData() {
    this.authService.userData as User;
  }

  protected readonly user = user;
}
