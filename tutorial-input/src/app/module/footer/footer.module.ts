import { NgModule } from '@angular/core';
import { BoxComponent } from '../box/box.component';
import { CommonModule } from '@angular/common';
import { BoxItemComponent } from '../box-item/box-item.component';
// import { BrowserModule } from '@angular/platform-browser';
// import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [BoxComponent, BoxItemComponent],
  imports: [CommonModule],
  exports: [BoxComponent, BoxItemComponent],
})
export class FooterModule {}
