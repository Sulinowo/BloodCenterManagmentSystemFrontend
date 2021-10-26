import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

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
    canActivate: [AuthGuard],
  },
  {
    path: 'bloodneeded',
    loadChildren: () =>
      import('./shared/sites/blood-needed/blood-needed.module').then(
        (m) => m.BloodNeededModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'informations',
    loadChildren: () =>
      import('./shared/sites/informations/informations.module').then(
        (m) => m.InformationsModule
      ),
    canActivate: [AuthGuard],
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
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./shared/sites/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: 'setpassword',
    loadChildren: () =>
      import('./shared/sites/set-password/set-password.module').then(
        (m) => m.SetPasswordModule
      ),
  },

  //donator
  {
    path: 'profile',
    loadChildren: () =>
      import('./modules/donator/donator.module').then(
        (m) => m.DonatorModule
      ),
  },

  //worker
  {
    path: 'bloodDonator',
    loadChildren: () =>
      import('./modules/worker/worker.module').then(
        (m) => m.WorkerModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
