import { Pipe, PipeTransform } from '@angular/core';

import { ResponseItemModel } from 'src/app/youtube/models/response-item.model';

@Pipe({
  name: 'dateSort',
})
export class DateSortPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(items: ResponseItemModel[], date: string = ''): ResponseItemModel[] {
    if (!date) {
      return items;
    }
    return items.slice().sort((a: ResponseItemModel, b: ResponseItemModel) => {
      let dateA: Date;
      let dateB: Date;
      if (date === 'first') {
        dateA = new Date(a.snippet.publishedAt);
        dateB = new Date(b.snippet.publishedAt);
      } else {
        dateA = new Date(b.snippet.publishedAt);
        dateB = new Date(a.snippet.publishedAt);
      }

      if (dateA > dateB) {
        return 1;
      }
      if (dateA < dateB) {
        return -1;
      }
      return 0;
    });
  }
}
