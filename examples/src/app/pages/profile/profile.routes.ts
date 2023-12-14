import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

// parent = profile
export const profile_routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./index/index.component').then((c) => c.IndexComponent),
  },
  {
    path: ':idd',
    loadComponent: () =>
      import('./own/own.component').then((c) => c.OwnComponent),
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'courses',
    loadComponent: () =>
      import('./courses/courses.component').then((c) => c.CoursesComponent),
  },
  {
    path: 'map',
    loadComponent: () =>
      import('./map/map.component').then((c) => c.MapComponent),
  },
];
