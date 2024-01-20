import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { mainContentAnimation } from '../../app/animations';
import { SidebarService } from './services/sidebar.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
    trigger('bottomToTop', [
      state('open', style({
        transform: 'translateY(0)',
      })),
      state('close', style({
        transform: 'translateY(100%)', // Adjust the percentage based on your requirements
      })),
      transition('open <=> close', animate('0.3s ease-in-out')),
    ]), mainContentAnimation()],
})
export class LayoutComponent implements OnInit {
  public sidebarState!: string;
  private breakpointSubscription!: Subscription;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  isOpened: boolean = true;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  constructor(
    private sidebarService: SidebarService,
    private changeDetectorRef: ChangeDetectorRef, media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)'); // Adjust the breakpoint as needed
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    if (this.mobileQuery.matches) {
      this.isOpened = false;
    }
  }

  ngOnInit() {
    this.subscribeToSidebarState();
  }

  private subscribeToSidebarState() {
    this.sidebarService.sidebarStateObservable$.subscribe(
      (newState: string) => {
        this.sidebarState = newState;
        console.log(newState)
      }
    );
  }

  ngOnDestroy() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    if (this.breakpointSubscription) {
      this.breakpointSubscription.unsubscribe();
    }
  }
}
