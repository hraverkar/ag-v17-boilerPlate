import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KanbanService } from '../../services/kanban.service';
import { ITaskDetailsResponse } from '../../interfaces/itask-details-response';

@Component({
  selector: 'app-kanban-task-details',
  templateUrl: './kanban-task-details.component.html',
  styleUrl: './kanban-task-details.component.scss',
})
export class KanbanTaskDetailsComponent implements OnInit {
  public Id: string;
  public TaskDetails: ITaskDetailsResponse;
  constructor(
    private activateRoute: ActivatedRoute,
    private kanbanService: KanbanService
  ) {}
  public ngOnInit(): void {
    this.Id = this.activateRoute.snapshot.paramMap.get('id');
    this.GetTaskDetailsById(this.Id);
  }

  public GetTaskDetailsById(Id: string) {
    this.kanbanService
      .GetTaskDetailsById(Id)
      .subscribe((res: ITaskDetailsResponse) => {
        if (res !== undefined && res !== null) {
          this.TaskDetails = res;
        }
      });
  }
}
