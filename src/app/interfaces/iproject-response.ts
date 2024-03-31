export interface IProjectResponse {
  id: string;
  projectName: string;
  projectDescription: string;
  isDeleted: boolean;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
}
