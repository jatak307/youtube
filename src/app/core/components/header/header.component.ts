import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';

import { AuthService } from 'src/app/core/services/auth.service';
import { ShowResultsService } from 'src/app/core/services/show-results.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public visibleFilterPanel = false;

  public form: FormGroup = new FormGroup({});

  public isMain: boolean = true;

  public user: string | null = localStorage.getItem('name');

  constructor(
    private showResultsList: ShowResultsService,
    private router: Router,
    public authService: AuthService,
  ) {
    this.router.events.subscribe((r) => {
      if (r instanceof NavigationEnd) {
        if (r.url === '/main' || r.url === '/auth') {
          this.isMain = true;
        } else {
          this.isMain = false;
        }
      }
    });
  }

  toggleFilterPanel() {
    this.visibleFilterPanel = !this.visibleFilterPanel;
  }

  submit() {
    this.showResultsList.toggleShowResults();
  }

  public onAuthClick() {
    this.router.navigate(['/auth']);
  }

  public onLogout() {
    this.authService.logout();
    this.user = null;
  }
}
