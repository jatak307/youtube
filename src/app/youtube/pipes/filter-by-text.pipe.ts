import { Pipe, PipeTransform } from '@angular/core';

import { ResponseItemModel } from 'src/app/youtube/models/response-item.model';

@Pipe({
  name: 'filterByText',
})
export class FilterByTextPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(items: ResponseItemModel[], text: string = ''): ResponseItemModel[] {
    if (!text.trim()) {
      return items;
    }

    return items.filter((item) =>
      item.snippet.title.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
