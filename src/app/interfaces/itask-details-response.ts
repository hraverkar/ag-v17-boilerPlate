import { IProjectResponse } from "./iproject-response";
import { ITaskStatusResponse } from "./itask-status-response";

export interface ITaskDetailsResponse {
  id: string;
  taskTitle: string;
  taskDetail: string;
  taskAssignTo: string;
  taskCreatedAt: Date;
  taskCreatedBy: string;
  isDeleted: boolean;
  taskStatusId: string;
  taskStatus: ITaskStatusResponse;
  projectId: string;
  project: IProjectResponse;
}
