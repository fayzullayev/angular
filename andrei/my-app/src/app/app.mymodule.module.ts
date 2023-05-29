import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { OoComponent } from './oo/oo.component';

@NgModule({
  declarations: [OoComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [OoComponent],
})
export class AppMymoduleModule {}
