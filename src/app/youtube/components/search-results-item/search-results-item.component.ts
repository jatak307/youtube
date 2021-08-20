import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ResponseItemModel } from 'src/app/youtube/models/response-item.model';

@Component({
  selector: 'app-search-results-item',
  templateUrl: './search-results-item.component.html',
  styleUrls: ['./search-results-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsItemComponent {
  @Input() selectedVideo?: ResponseItemModel;

  constructor(private router: Router) {}

  public onMoreBtnClick() {
    this.router.navigate(['/main', this.selectedVideo?.id]);
  }
}
