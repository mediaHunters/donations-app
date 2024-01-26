import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';

const COMPONENTS = [ButtonComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class SharedModule {}
