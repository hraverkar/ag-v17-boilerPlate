import { ITaskDetailsResponse } from './itask-details-response';

export interface ITaskDetailsList {
  items: ITaskDetailsResponse[];
  count: number;
}
