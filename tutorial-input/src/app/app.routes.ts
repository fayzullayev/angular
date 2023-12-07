import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdminComponent } from './pages/admin/admin.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutComponent } from './pages/profile/about/about.component';
import { CoursesComponent } from './pages/profile/courses/courses.component';
import { MapComponent } from './pages/profile/map/map.component';
import { IndexComponent } from './pages/profile/index/index.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./pages/profile/profile.component').then((c) => c.ProfileComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/profile//index/index.component').then((c) => c.IndexComponent),
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'courses',
        loadComponent: () =>
          import('./pages/profile/courses/courses.component').then((c) => c.CoursesComponent),
      },
      {
        path: 'map',
        loadComponent: () =>
          import('./pages/profile/map/map.component').then((c) => c.MapComponent),
      },
    ],
  },
  {
    path: 'home',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
