import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KanbanService } from '../../services/kanban.service';
import { ITaskDetailsList } from '../../interfaces/itask-details-response-list';
import { ITaskDetailsResponse } from '../../interfaces/itask-details-response';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ITaskStatusResponse } from '../../interfaces/itask-status-response';
import { NgxSpinnerService } from 'ngx-spinner';
import { IProjectResponse } from '../../interfaces/iproject-response';
import { Dialog } from '@angular/cdk/dialog';
import { AddTaskModalComponent } from '../shared/add-task-modal/add-task-modal.component';
import { ITaskDetailsRequest } from '../../interfaces/itask-details-request';
import { ToastrService } from 'ngx-toastr';
import { TaskStatusEnum } from '../shared/task-status-enum';
import { IUpdateTaskDetailsRequest } from '../../interfaces/iupdate-task-details-request';

@Component({
  selector: 'app-kanban-single-project',
  templateUrl: './kanban-single-project.component.html',
  styleUrl: './kanban-single-project.component.scss',
})
export class KanbanSingleProjectComponent implements OnInit {
  public id: string;
  public projectName: string;
  public projectsDesc: string;

  public TaskStatus: ITaskStatusResponse[];
  public Id: string;
  public TaskDetails: ITaskDetailsResponse[];
  public Count: number;
  public TaskDetailsByStatus: ITaskStatusResponse[] = [];
  public ProjectDetails: IProjectResponse;
  public TaskStatusEnum = TaskStatusEnum;
  public constructor(
    private activateRoute: ActivatedRoute,
    private kanbanService: KanbanService,
    private spinnerService: NgxSpinnerService,
    private dialog: Dialog,
    private toastService: ToastrService
  ) {}

  public ngOnInit(): void {
    this.spinnerService.show();
    this.Id = this.activateRoute.snapshot.paramMap.get('id');
    this.getProjectDetailsById(this.Id);
    this.getAllStatus();
    this.getTaskDetailsByProject(this.Id);
  }

  public drop(event: CdkDragDrop<ITaskDetailsResponse[]>, statusName: string) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      console.log(event.container.data);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      const data = event.container.data.at(event.currentIndex);
      const p = this.TaskStatus.find((a) => a.statusName == statusName);

      const updateTaskAdditionDetails: IUpdateTaskDetailsRequest = {
        Id: data.id,
        TaskTitle: data.taskTitle,
        TaskDetail: data.taskDetail,
        TaskAssignTo: data.taskAssignTo,
        TaskStatusId: p.id,
        TaskCreatedBy: data.taskCreatedBy,
      };

      this.kanbanService
        .UpdateTaskDetails(updateTaskAdditionDetails)
        .subscribe((res) => {
          this.toastService.success('Task is updated !!');
          this.getTaskDetailsByProject(this.Id);
        });
    }
  }

  public async getTaskDetailsByProject(Id: string) {
    this.kanbanService
      .GetAllTaskDetailsByProjectId(Id)
      .subscribe((res: ITaskDetailsList) => {
        if (res !== undefined && res.count !== 0) {
          this.TaskDetails = res.items;
          this.Count = res.count;
          this.getUpdateTaskDetails();
        }
        this.spinnerService.hide();
      });
  }

  public async getAllStatus() {
    this.kanbanService
      .GetAllTaskStatus()
      .subscribe((res: ITaskStatusResponse[]) => {
        this.TaskStatus = res;
      });
  }
  public taskInProgressStatusDetails;
  public taskOpenStatusDetails;
  public taskInReviewStatusDetails;
  public taskClosedStatusDetails;

  public getTheListOfTaskByStatus(statusName: string): ITaskDetailsResponse[] {
    if (this.TaskDetails !== undefined && this.Count !== 0) {
      switch (statusName) {
        case TaskStatusEnum.Open:
          this.taskOpenStatusDetails = this.TaskDetails.filter(
            (task) => task.taskStatus.statusName === statusName
          );
          return this.taskOpenStatusDetails;
        case TaskStatusEnum.InProgress:
          this.taskInProgressStatusDetails = this.TaskDetails.filter(
            (task) => task.taskStatus.statusName === statusName
          );
          return this.taskInProgressStatusDetails;
        case TaskStatusEnum.InReview:
          this.taskInReviewStatusDetails = this.TaskDetails.filter(
            (task) => task.taskStatus.statusName === statusName
          );
          return this.taskInReviewStatusDetails;
        case TaskStatusEnum.Closed:
          this.taskClosedStatusDetails = this.TaskDetails.filter(
            (task) => task.taskStatus.statusName === statusName
          );
          return this.taskClosedStatusDetails;
        default:
          return [];
      }
    }
    return [];
  }

  public getProjectDetailsById(Id: string) {
    this.kanbanService.GetProjectById(Id).subscribe((res: IProjectResponse) => {
      if (res !== undefined || res !== null) {
        this.ProjectDetails = res;
        this.projectName = res.projectName;
        this.projectsDesc = res.projectDescription;
      }
    });
  }

  public AddNewTask(): void {
    const dialogRef = this.dialog.open(AddTaskModalComponent, {
      data: this.TaskStatus,
    });
    dialogRef.closed.subscribe((result: any) => {
      console.log(result);
      if (result !== undefined && result !== null) {
        this.CreateNewTask(result);
        console.log('The dialog was closed');
      }
    });
  }

  public CreateNewTask(result: any): void {
    this.spinnerService.show();
    const taskAdditionDetails: ITaskDetailsRequest = {
      taskTitle: result.taskTitle,
      taskDetail: result.taskDetail,
      taskAssignTo: 'harshal.raverkar@gmail.com',
      taskStatusId: result.taskStatusId,
      taskCreatedBy: 'harshal.raverkar@gmail.com',
      projectId: this.Id,
    };
    this.kanbanService
      .CreateTaskDetails(taskAdditionDetails)
      .subscribe((res: any) => {
        if (res !== undefined || res !== null) {
          console.log(res);
          this.toastService.success('New task is Created !!');
          this.getTaskDetailsByProject(this.Id);
        }
        this.spinnerService.hide();
      });
  }

  public OnTaskDeleteClick(id: string) {
    this.kanbanService.DeleteTaskDetailsById(id).subscribe((res) => {
      this.toastService.warning('Task deleted successfully !!');
      this.getTaskDetailsByProject(this.Id);
    });
  }

  public getUpdateTaskDetails(): void {
    this.getTheListOfTaskByStatus(TaskStatusEnum.Open);
    this.getTheListOfTaskByStatus(TaskStatusEnum.InProgress);
    this.getTheListOfTaskByStatus(TaskStatusEnum.InReview);
    this.getTheListOfTaskByStatus(TaskStatusEnum.Closed);
  }
}
