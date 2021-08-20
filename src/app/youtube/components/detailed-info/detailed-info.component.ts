import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ResponseItemModel } from '../../models/response-item.model';

@Component({
  selector: 'app-detailed-info',
  templateUrl: './detailed-info.component.html',
  styleUrls: ['./detailed-info.component.scss'],
})
export class DetailedInfoComponent {
  @Input() public selectedVideo?: ResponseItemModel;

  @Output() public comeBack: EventEmitter<void> = new EventEmitter();

  public onClickBack() {
    this.comeBack.emit();
  }
}
