import { Pipe, PipeTransform } from '@angular/core';

import { ResponseItemModel } from 'src/app/youtube/models/response-item.model';

@Pipe({
  name: 'viewsSort',
})
export class ViewsSortPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(
    items: ResponseItemModel[],
    isViewsSort: boolean = false,
  ): ResponseItemModel[] {
    if (!isViewsSort) return items;

    return items
      .slice()
      .sort(
        (a: ResponseItemModel, b: ResponseItemModel) =>
          parseInt(b.statistics.viewCount, 10) - parseInt(a.statistics.viewCount, 10),
      );
  }
}
