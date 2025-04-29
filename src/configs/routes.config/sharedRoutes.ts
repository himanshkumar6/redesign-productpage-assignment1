import { lazy } from 'react';
import type { Routes } from '@/@types/routes';

// Public Routes (accessible to everyone)
const publicRoutes: Routes = [
  {
    key: 'signIn',
    path: '/sign-in',
    component: lazy(() => import('@/views/auth/SignIn')),
    authority: [],
  },
  {
    key: 'signUp',
    path: '/sign-up',
    component: lazy(() => import('@/views/auth/SignUp')),
    authority: [],
  },
];

// Protected Routes (accessible only to authorized users)
const protectedRoutes: Routes = [
  {
    key: 'dashboard',
    path: '/dashboard',
    component: lazy(() => import('@/views/dashboard/Dashboard')),
    authority: ['user', 'admin'],
    isProtected: true,
  },
  {
    key: 'adminPage',
    path: '/admin',
    component: lazy(() => import('@/views/admin/AdminPage')),
    authority: ['admin'],
    isProtected: true,
  },
];

const sharedRoutes: Routes = [...publicRoutes, ...protectedRoutes];

export default sharedRoutes;
