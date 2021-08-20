import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FilterService } from 'src/app/core/services/filter.service';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterPanelComponent {
  public inputWord = '';

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private filterService: FilterService) {}

  public onFirstDateSort(): void {
    this.filterService.dateSort = 'first';
    if (this.filterService.viewsSort) this.filterService.viewsSort = false;
  }

  public onOldDateSort(): void {
    this.filterService.dateSort = 'old';
    if (this.filterService.viewsSort) this.filterService.viewsSort = false;
  }

  public onViewsSort(): void {
    this.filterService.viewsSort = true;
    this.filterService.dateSort = '';
  }

  public onInputChange(): void {
    this.filterService.filterWord = this.inputWord;
  }
}
