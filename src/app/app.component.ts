import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ag-v17-boilerPlate';

  constructor(
    private spinner: NgxSpinnerService,
    private toasterService: ToastrService
  ) {}
}
