import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
@UntilDestroy()
export class AppComponent {
  title = 'easyaba';
  user: any | undefined;
  isHandset = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe(Breakpoints.Handset)
      .pipe(
        untilDestroyed(this),
        map((result) => result.matches),
        shareReplay()
      )
      .subscribe((matches) => {
        this.isHandset = matches;
      });
  }
}
