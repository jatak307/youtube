import { Injectable } from '@angular/core';

import { youTubeResponse } from '../mock-response';
import { ResponseItemModel } from '../models/response-item.model';

@Injectable({
  providedIn: 'root',
})
export class ResponseService {
  private response: ResponseItemModel[] = [];

  private getResponse() {
    this.response = youTubeResponse.items;
    return this.response;
  }

  public getItemById(id: string) {
    return this.getResponse().find((item) => item.id === id);
  }
}
