import { ChangeDetectorRef, Component } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-toggle-sidebar',
  templateUrl: './toggle-sidebar.component.html',
  styleUrls: ['./toggle-sidebar.component.scss']
})
export class ToggleSidebarComponent {
  mobileQuery: MediaQueryList;
  isOpened: boolean = false;
  private _mobileQueryListener: () => void;
  constructor(
    private sidebarService: SidebarService,
    media: MediaMatcher,
    private changeDetectorRef: ChangeDetectorRef
  ) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)'); // Adjust the breakpoint as needed
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  toggleSideNav() {
    this.sidebarService.toggle();
    this.isOpened = !this.isOpened;
  }
}