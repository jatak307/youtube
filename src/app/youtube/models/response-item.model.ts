import { ResponseItemSnippetModel } from './response-item-snippet.model';
import { ResponseItemStatisticsModel } from './response-item-statistics.model';

export interface ResponseItemModel {
  kind: string;
  etag: string;
  id: string;
  snippet: ResponseItemSnippetModel;
  statistics: ResponseItemStatisticsModel;
}
