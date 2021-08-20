import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  public filterWord?: string;

  public dateSort?: string;

  public viewsSort?: boolean;
}
