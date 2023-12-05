import { inject } from '@angular/core';
import { HasAccessGuard } from '../has-access.guard';

export const APP_ROUTES = [
  {
    path: '',
    loadComponent: () =>
      import('./login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'enter',
    canMatch: [HasAccessGuard],
    data: {
      isAdmin: true,
    },
    loadComponent: () =>
      import('./dashboard/admin.component').then(
        (m) => m.AdminDashboardComponent,
      ),
  },
  {
    path: 'enter',
    canMatch: [HasAccessGuard],
    data: {
      roles: ['MANAGER'],
    },
    loadComponent: () =>
      import('./dashboard/manager.component').then(
        (m) => m.ManagerDashboardComponent,
      ),
  },
];
