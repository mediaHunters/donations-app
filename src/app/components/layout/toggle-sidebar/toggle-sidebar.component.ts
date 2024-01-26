import { Component } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-toggle-sidebar',
  templateUrl: './toggle-sidebar.component.html',
  styleUrls: ['./toggle-sidebar.component.scss']
})
export class ToggleSidebarComponent {

  constructor(
    private sidebarService: SidebarService,
  ) { }
  toggleSideNav() {
    this.sidebarService.toggle();
  }
}