import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [HomePageComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [HomePageComponent],
})
export class MyOwnModule {}
