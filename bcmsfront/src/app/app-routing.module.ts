import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./shared/sites/homepage/homepage.module').then(
        (m) => m.HomepageModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./shared/sites/contact/contact.module').then(
        (m) => m.ContactModule
      ),
  },
  {
    path: 'bloodneeded',
    loadChildren: () =>
      import('./shared/sites/blood-needed/blood-needed.module').then(
        (m) => m.BloodNeededModule
      ),
  },
  {
    path: 'informations',
    loadChildren: () =>
      import('./shared/sites/informations/informations.module').then(
        (m) => m.InformationsModule
      ),
  },
  {
    path: 'donationprocess',
    loadChildren: () =>
      import('./shared/sites/donation-process/donation-process.module').then(
        (m) => m.DonationProcessModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./shared/sites/login/login.module').then((m) => m.LoginModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'resetpass',
    loadChildren: () =>
      import('./shared/sites/reset-password/reset-password.module').then(
        (m) => m.ResetPasswordModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./shared/sites/register/register.module').then(
        (m) => m.RegisterModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'setpassword',
    loadChildren: () =>
      import('./shared/sites/set-password/set-password.module').then(
        (m) => m.SetPasswordModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'setnewpassword',
    loadChildren: () =>
      import('./shared/sites/set-new-password/set-new-password.module').then(
        (m) => m.SetNewPasswordModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'resetpassword',
    loadChildren: () =>
      import('./shared/sites/set-new-password/set-new-password.module').then(
        (m) => m.SetNewPasswordModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./modules/donator/donator.module').then((m) => m.DonatorModule),
    canActivate: [AuthGuard, RoleGuard],
    data: {
      roles: ['Donator', 'User'],
    },
  },
  {
    path: 'worker',
    loadChildren: () =>
      import('./modules/worker/worker.module').then((m) => m.WorkerModule),
    canActivate: [AuthGuard, RoleGuard],
    data: {
      roles: ['Worker'],
    },
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [RoleGuard, AuthGuard],
    data: {
      roles: ['Admin'],
    },
  },

  {
    path: '**',
    loadChildren: () =>
      import('./modules/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
