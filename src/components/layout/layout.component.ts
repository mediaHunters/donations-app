import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { mainContentAnimation } from '../../app/animations';
import { SidebarService } from './services/sidebar.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { trigger, state, style, transition, animate } from '@angular/animations';
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
    ]),mainContentAnimation()],
})
export class LayoutComponent implements OnInit {
  public sidebarState!: string;
  private breakpointSubscription!: Subscription;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  constructor(
    private sidebarService: SidebarService,
    private changeDetectorRef: ChangeDetectorRef, media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)'); // Adjust the breakpoint as needed
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
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
