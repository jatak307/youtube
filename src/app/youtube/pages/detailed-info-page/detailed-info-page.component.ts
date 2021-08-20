import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ResponseItemModel } from '../../models/response-item.model';
import { ResponseService } from '../../services/response.service';

@Component({
  selector: 'app-detailed-info-page',
  templateUrl: './detailed-info-page.component.html',
  styleUrls: ['./detailed-info-page.component.scss'],
})
export class DetailedInfoPageComponent implements OnInit {
  public selectedVideo?: ResponseItemModel;

  constructor(
    private route: ActivatedRoute,
    private response: ResponseService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.selectedVideo = this.response.getItemById(params.id);
    });
  }

  public onComeBack() {
    this.location.back();
  }
}
