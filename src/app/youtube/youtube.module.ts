import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DetailedInfoComponent } from './components/detailed-info/detailed-info.component';
import { SearchResultsItemComponent } from './components/search-results-item/search-results-item.component';
import { SearchResultsListComponent } from './components/search-results-list/search-results-list.component';
import { ItemBorderColorDirective } from './directives/item-border-color.directive';
import { DetailedInfoPageComponent } from './pages/detailed-info-page/detailed-info-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DateSortPipe } from './pipes/date-sort.pipe';
import { FilterByTextPipe } from './pipes/filter-by-text.pipe';
import { ViewsSortPipe } from './pipes/views-sort.pipe';
import { YoutubeRoutingModule } from './youtube-routing/youtube-routing.module';

@NgModule({
  declarations: [
    SearchResultsItemComponent,
    SearchResultsListComponent,
    FilterByTextPipe,
    ViewsSortPipe,
    DateSortPipe,
    ItemBorderColorDirective,
    MainPageComponent,
    DetailedInfoComponent,
    DetailedInfoPageComponent,
  ],
  imports: [CommonModule, SharedModule, YoutubeRoutingModule],
  exports: [
    SearchResultsItemComponent,
    SearchResultsListComponent,
    FilterByTextPipe,
    ViewsSortPipe,
    DateSortPipe,
    ItemBorderColorDirective,
    DetailedInfoPageComponent,
  ],
})
export class YoutubeModule {}
