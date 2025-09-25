import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';
import { UserRole } from './core/models/user.model';

export const routes: Routes = [
  // Public routes with public layout
  {
    path: '',
    loadComponent: () => import('./layouts/public/public-layout.component').then(m => m.PublicLayoutComponent),
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
        title: 'KindCompanion - Elderly Companion Services in Montreal'
      },
      {
        path: 'about',
        loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent),
        title: 'About Us - KindCompanion'
      },
      {
        path: 'services',
        loadChildren: () => import('./features/services/services.routes').then(m => m.SERVICES_ROUTES)
      },
      {
        path: 'companions',
        loadComponent: () => import('./features/companions/companions.component').then(m => m.CompanionsComponent),
        title: 'Our Companions - KindCompanion'
      },
      {
        path: 'contact',
        loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent),
        title: 'Contact Us - KindCompanion'
      },
      {
        path: 'booking',
        loadChildren: () => import('./features/booking/booking.routes').then(m => m.BOOKING_ROUTES)
      },
      {
        path: 'support',
        loadComponent: () => import('./features/support/support.component').then(m => m.SupportComponent),
        title: 'Support & Resources - KindCompanion'
      },
      {
        path: 'company',
        loadComponent: () => import('./features/company/company.component').then(m => m.CompanyComponent),
        title: 'Company Information - KindCompanion'
      },
      {
        path: 'legal',
        loadComponent: () => import('./features/legal/legal.component').then(m => m.LegalComponent),
        title: 'Legal Information - KindCompanion'
      }
    ]
  },

  // Authentication routes
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
  },

  // Family portal routes (authenticated)
  {
    path: 'family',
    loadComponent: () => import('./layouts/family/family-layout.component').then(m => m.FamilyLayoutComponent),
    canActivate: [() => inject(AuthGuard).canActivate()],
    canActivateChild: [() => inject(RoleGuard).canActivateChildWithRoles([UserRole.FAMILY_MEMBER, UserRole.CLIENT])],
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/family/dashboard/family-dashboard.component').then(m => m.FamilyDashboardComponent),
        title: 'Family Dashboard - KindCompanion'
      }
    ]
  },

  // Admin portal routes (authenticated, admin only)
  {
    path: 'admin',
    loadComponent: () => import('./layouts/admin/admin-layout.component').then(m => m.AdminLayoutComponent),
    canActivate: [() => inject(AuthGuard).canActivate()],
    canActivateChild: [() => inject(RoleGuard).canActivateChildWithRoles([UserRole.ADMIN, UserRole.STAFF])],
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/admin/dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent),
        title: 'Admin Dashboard - KindCompanion'
      }
    ]
  },

  // Error pages
  {
    path: '400',
    loadComponent: () => import('./features/error/bad-request/bad-request.component').then(m => m.BadRequestComponent),
    title: 'Bad Request - KindCompanion'
  },
  {
    path: '403',
    loadComponent: () => import('./features/error/forbidden/forbidden.component').then(m => m.ForbiddenComponent),
    title: 'Access Forbidden - KindCompanion'
  },
  {
    path: '404',
    loadComponent: () => import('./features/error/not-found/not-found.component').then(m => m.NotFoundComponent),
    title: 'Page Not Found - KindCompanion'
  },
  {
    path: '500',
    loadComponent: () => import('./features/error/server-error/server-error.component').then(m => m.ServerErrorComponent),
    title: 'Server Error - KindCompanion'
  },

  // Wildcard route - must be last
  {
    path: '**',
    redirectTo: '/404'
  }
];
