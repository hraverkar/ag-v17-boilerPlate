import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ITaskDetailsList } from '../interfaces/itask-details-response-list';
import { HttpClient } from '@angular/common/http';
import { ITaskDetailsResponse } from '../interfaces/itask-details-response';
import { IResponse } from '../interfaces/iresponse';
import { ITaskStatusResponse } from '../interfaces/itask-status-response';
import { ITaskDetailsRequest } from '../interfaces/itask-details-request';
import { ITaskStatusRequest } from '../interfaces/itask-status-request';
import { IProjectRequest } from '../interfaces/iproject-request';
import { IProjectResponse } from '../interfaces/iproject-response';
import { IProjectResponseList } from '../interfaces/iproject-response-list';
import { IUpdateProjectRequest } from '../interfaces/iupdate-project-request';
import { IUpdateTaskDetailsRequest } from '../interfaces/iupdate-task-details-request';

@Injectable({
  providedIn: 'root',
})
export class KanbanService {
  public baseURL = environment.baseURL;
  constructor(private httpClient: HttpClient) {}

  public GetTaskDetailsById(id: string): Observable<ITaskDetailsResponse> {
    return this.httpClient.get<ITaskDetailsResponse>(
      this.baseURL + '/TaskDetails/' + id
    );
  }

  public GetAllTaskDetails(): Observable<ITaskDetailsList> {
    return this.httpClient.get<ITaskDetailsList>(this.baseURL + '/TaskDetails');
  }

  public GetAllTaskDetailsByProjectId(
    Id: string
  ): Observable<ITaskDetailsList> {
    return this.httpClient.get<ITaskDetailsList>(
      this.baseURL + '/TaskDetails/project/' + Id
    );
  }

  public DeleteTaskDetailsById(id: string): Observable<IResponse> {
    return this.httpClient.delete<IResponse>(
      this.baseURL + '/TaskDetails/' + id
    );
  }

  public GetTaskStatusById(id: string): Observable<ITaskStatusResponse> {
    return this.httpClient.get<ITaskStatusResponse>(
      this.baseURL + '/TaskStatus/' + id
    );
  }

  public GetAllTaskStatus(): Observable<ITaskStatusResponse[]> {
    return this.httpClient.get<ITaskStatusResponse[]>(
      this.baseURL + '/TaskStatus'
    );
  }

  public DeleteTaskStatusById(id: string): Observable<IResponse> {
    return this.httpClient.delete<IResponse>(
      this.baseURL + '/TaskStatus/' + id
    );
  }

  public CreateTaskDetails(
    taskDetailsRequest: ITaskDetailsRequest
  ): Observable<ITaskDetailsRequest> {
    return this.httpClient.post<ITaskDetailsRequest>(
      this.baseURL + '/TaskDetails',
      taskDetailsRequest
    );
  }

  public CreateTaskStatus(
    taskStatusRequest: ITaskStatusRequest
  ): Observable<ITaskStatusRequest> {
    return this.httpClient.post<ITaskStatusRequest>(
      this.baseURL + '/TaskDetails',
      taskStatusRequest
    );
  }

  public CreateProject(
    projectRequest: IProjectRequest
  ): Observable<IProjectRequest> {
    return this.httpClient.post<IProjectRequest>(
      this.baseURL + '/Project',
      projectRequest
    );
  }

  public GetProjectById(id: string): Observable<IProjectResponse> {
    return this.httpClient.get<IProjectResponse>(
      this.baseURL + '/Project/' + id
    );
  }

  public GetAllProjects(): Observable<IProjectResponseList> {
    return this.httpClient.get<IProjectResponseList>(this.baseURL + '/Project');
  }

  public UpdateProjectById(
    UpdateProjectRequest: IUpdateProjectRequest
  ): Observable<IUpdateProjectRequest> {
    return this.httpClient.patch<IUpdateProjectRequest>(
      this.baseURL + '/Project',
      UpdateProjectRequest
    );
  }

  public DeleteProjectById(id: string): Observable<IResponse> {
    return this.httpClient.delete<IResponse>(this.baseURL + '/Project/' + id);
  }

  public UpdateTaskDetails(
    updateTaskDetailsRequest: IUpdateTaskDetailsRequest
  ): Observable<IUpdateTaskDetailsRequest> {
    return this.httpClient.patch<IUpdateTaskDetailsRequest>(
      this.baseURL + '/TaskDetails',
      updateTaskDetailsRequest
    );
  }
}
