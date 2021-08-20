import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShowResultsService {
  public showResults: boolean = false;

  toggleShowResults(): void {
    this.showResults = true;
  }
}
