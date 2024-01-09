import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { mainContentAnimation } from '../../app/animations';
import { SidebarService } from './services/sidebar.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [mainContentAnimation()],
})
export class LayoutComponent implements OnInit {
  public sidebarState!: string;
  private breakpointSubscription!: Subscription;

  constructor(
    private sidebarService: SidebarService,
  ) {}

  ngOnInit() {
    this.subscribeToSidebarState();
  }

  private subscribeToSidebarState() {
    this.sidebarService.sidebarStateObservable$.subscribe(
      (newState: string) => {
        this.sidebarState = newState;
      }
    );
  }

  ngOnDestroy() {
    if (this.breakpointSubscription) {
      this.breakpointSubscription.unsubscribe();
    }
  }
}
