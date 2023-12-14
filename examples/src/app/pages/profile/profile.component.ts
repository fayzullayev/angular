import { Component, HostListener, Input, OnInit } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { MapComponent } from './map/map.component';
import { provideRouter, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgStyle } from '@angular/common';
import { profile_routes } from './profile.routes';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    AboutComponent,
    MapComponent,
    AboutComponent,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    NgStyle,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  //   @Input()
  //   set id(heroId: string) {
  //     this.hero$ = this.service.getHero(heroId);
  //   }
  // }
  // ngOnInit() {
  //   // Initial check in case the tab is not active when the component is initialized
  //   this.checkTabVisibility();
  // }
  //
  // @HostListener('document:visibilitychange', ['$event'])
  // onVisibilityChange(event: Event) {
  //   this.checkTabVisibility();
  // }
  //
  // private checkTabVisibility() {
  //   if (document.hidden) {
  //     console.log('Tab is not active');
  //     // Handle the tab being inactive
  //   } else {
  //     console.log('Tab is active');
  //     // Handle the tab being active
  //   }
  // }
}
