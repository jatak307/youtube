import { ResponseItemLocalizedModel } from './response-item-localized.model';
import { ResponseItemThumbnailsModel } from './response-item-thumbnails.model';

export interface ResponseItemSnippetModel {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: ResponseItemThumbnailsModel;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  defaultLanguage?: string;
  localized: ResponseItemLocalizedModel;
  defaultAudioLanguage: string;
}
