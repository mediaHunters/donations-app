import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';
import { iconAnimation, labelAnimation, sidebarAnimation } from '../../../animations';
import { MediaMatcher } from '@angular/cdk/layout';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  animations: [
    sidebarAnimation(),
    iconAnimation(),
    labelAnimation(),
  ]
})
export class SidebarComponent implements OnInit {
  sidebarState!: string;
  panelOpenState: boolean = false;
  mobileQuery: MediaQueryList;
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

  ngOnInit() {
    this.sidebarService.sidebarStateObservable$.
      subscribe((newState: string) => {
        this.sidebarState = newState;
      });
  }
}