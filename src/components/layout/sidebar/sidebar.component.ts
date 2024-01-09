import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { sidebarAnimation, iconAnimation, labelAnimation } from '../../../app/animations';
import { SidebarService } from '../services/sidebar.service';

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

  constructor(
    private sidebarService: SidebarService,
  ) { }

  ngOnInit() {
    this.sidebarService.sidebarStateObservable$.
      subscribe((newState: string) => {
        this.sidebarState = newState;
      });
  }
}