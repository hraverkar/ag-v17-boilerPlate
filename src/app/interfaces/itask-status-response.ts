export interface ITaskStatusResponse {
  id: string;
  statusName: string;
  createdBy: string;
  createdAt: Date;
  isDeleted: boolean;
}
