export interface ITaskStatusRequest {
  statusName: string;
  createdBy: string;
  createdAt: Date;
  isDeleted: boolean;
}
