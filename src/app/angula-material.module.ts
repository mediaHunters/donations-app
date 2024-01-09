import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDividerModule } from "@angular/material/divider";
const COMPONENTS = [MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
]

@NgModule({
    imports: [...COMPONENTS],
    exports: [...COMPONENTS]
})


export class AngularMaterialModule {}