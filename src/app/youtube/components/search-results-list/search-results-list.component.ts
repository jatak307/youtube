import { Component, Input } from '@angular/core';

import { FilterService } from 'src/app/core/services/filter.service';
import { ShowResultsService } from 'src/app/core/services/show-results.service';

import { youTubeResponse } from '../../mock-response';
import { ResponseItemModel } from '../../models/response-item.model';

@Component({
  selector: 'app-search-results-list',
  templateUrl: './search-results-list.component.html',
  styleUrls: ['./search-results-list.component.scss'],
})
export class SearchResultsListComponent {
  @Input() resultsList: ResponseItemModel[] = youTubeResponse.items;

  constructor(
    public showResultsList: ShowResultsService,
    public filterService: FilterService,
  ) {}
}
