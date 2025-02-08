// https://www.angulararchitects.io/en/blog/routing-and-lazy-loading-with-standalone-components/
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'home',
  // },
  { path: '', component: HomeComponent },
  // Option 1: Lazy Loading another Routing Config
  {
    path: 'design',
    loadChildren: () =>
      import('./design/design.routes').then((m) => m.DESIGN_ROUTES),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.routes').then((m) => m.DASHBOARD_ROUTES),
  },
  // {
  //   path: 'canvas',
  //   loadChildren: () =>
  //     import('./canvas/canvas.routes').then((m) => m.CANVAS_ROUTES),
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: 'sketch',
  //   loadChildren: () =>
  //     import('./sketch/sketch.routes').then((m) => m.SKETCH_ROUTES),
  //   canActivate: [AuthGuard],
  // },
  // ...AUTH_ROUTES,
  // {
  //   path: 'vd',
  //   loadChildren: () => import('./vd/vd.routes').then((m) => m.VD_ROUTES),
  // },
  // Option 2: Directly Lazy Loading a Standalone Component
  // {
  //     path: 'next-flight',
  //     loadComponent: () =>
  //         import('./next-flight/next-flight.component')
  //             .then(m => m.NextFlightComponent)
  // }
  {
    path: '**',
    redirectTo: '',
  },
];
