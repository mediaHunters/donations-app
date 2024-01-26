import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToggleSidebarComponent } from './toggle-sidebar/toggle-sidebar.component';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/SharedModule';
import { AngularMaterialModule } from '../../angula-material.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, ToggleSidebarComponent, LayoutComponent,FooterComponent],
  imports: [AngularMaterialModule, RouterModule, SharedModule],
  exports: [LayoutComponent]
})
export default class LayoutModule {}
