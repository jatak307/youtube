import { ThumbnailsImageModel } from './thumbnails-image.model';

export interface ResponseItemThumbnailsModel {
  default: ThumbnailsImageModel;
  medium: ThumbnailsImageModel;
  high: ThumbnailsImageModel;
  standard: ThumbnailsImageModel;
  maxres: ThumbnailsImageModel;
}
