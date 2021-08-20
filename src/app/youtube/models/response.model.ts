import { ResponseItemModel } from './response-item.model';
import { ResponsePageInfoModel } from './response-page-info.model';

export interface ResponseModel {
  kind: string;
  etag: string;
  pageInfo: ResponsePageInfoModel;
  items: ResponseItemModel[];
}
