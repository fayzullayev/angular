import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'lingo-frontend';

  ngOnInit() {
    // Initial check in case the tab is not active when the component is initialized
    // this.checkTabVisibility();
  }

  // @HostListener('document:visibilitychange', ['$event'])
  // onVisibilityChange(event: Event) {
  //   this.checkTabVisibility();
  // }
  // //
  // timeout: any;

  // private checkTabVisibility() {
  //   if (document.hidden) {
  //     console.log('Tab is not active (AppComponent)');
  //     // Handle the tab being inactive
  //     let num: number = 0;
  //     this.timeout = setInterval(() => {
  //       console.log(num);
  //       num++;
  //     }, 1000);
  //   } else {
  //     console.log('Tab is active (AppComponent)');
  //     clearInterval(this.timeout);
  //     // Handle the tab being active
  //   }
  // }
}
