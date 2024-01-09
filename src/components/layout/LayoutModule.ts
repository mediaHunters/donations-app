import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToggleSidebarComponent } from './toggle-sidebar/toggle-sidebar.component';
import { AngularMaterialModule } from '../../app/angula-material.module';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/SharedModule';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, ToggleSidebarComponent, LayoutComponent],
  imports: [AngularMaterialModule, RouterModule, SharedModule],
  exports: [LayoutComponent]
})
export default class LayoutModule {}
