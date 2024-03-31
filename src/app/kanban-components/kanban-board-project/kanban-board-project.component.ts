import { Component, OnInit } from '@angular/core';
import { KanbanService } from '../../services/kanban.service';
import { IProjectResponseList } from '../../interfaces/iproject-response-list';
import { IProjectResponse } from '../../interfaces/iproject-response';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Dialog } from '@angular/cdk/dialog';
import { ModalPopupComponent } from '../shared/modal-popup/modal-popup.component';
import { IProjectRequest } from '../../interfaces/iproject-request';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-kanban-board-project',
  templateUrl: './kanban-board-project.component.html',
  styleUrl: './kanban-board-project.component.scss',
})
export class KanbanBoardProjectComponent implements OnInit {
  public projects: IProjectResponse[];
  public constructor(
    private kanbanService: KanbanService,
    private router: Router,
    private spinnerService: NgxSpinnerService,
    private dialog: Dialog,
    private toastService: ToastrService
  ) {}

  ngOnInit(): void {
    this.GetAllProjects();
  }

  private GetAllProjects() {
    this.spinnerService.show();
    this.kanbanService
      .GetAllProjects()
      .subscribe((res: IProjectResponseList) => {
        if (res !== undefined || res !== null) {
          this.projects = res.items;
        }
        this.spinnerService.hide();
      });
  }

  public OnProjectClick(id: string): void {
    this.router.navigate(['/project/' + id]);
  }

  public newProjectCreation(): void {
    const dialogRef = this.dialog.open(ModalPopupComponent);
    dialogRef.closed.subscribe((result: any) => {
      console.log(result);
      if (result !== undefined && result !== null) {
        this.CreateProject(result);
        console.log('The dialog was closed');
      }
    });
  }

  public CreateProject(result: any) {
    this.spinnerService.show();
    const projectRequest: IProjectRequest = {
      ProjectName: result.projectTitle,
      ProjectDescription: result.projectDescription,
      IsDeleted: false,
      CreatedBy: 'harshal.raverkar@gmail.com',
    };
    this.kanbanService.CreateProject(projectRequest).subscribe((res: any) => {
      if (res !== undefined || res !== null) {
        console.log(res);
        this.toastService.success('New Project is Created !!');
        this.GetAllProjects();
      }
      this.spinnerService.hide();
    });
  }
}
