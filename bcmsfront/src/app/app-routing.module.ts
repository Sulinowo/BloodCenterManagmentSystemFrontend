import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'homepage',
    loadChildren: () => 
      import('./shared/sites/homepage/homepage.module').then(
        (m) => m.HomepageModule
      )
  },
  {
    path: 'contact',
    loadChildren: () => 
      import('./shared/sites/contact/contact.module').then(
        (m) => m.ContactModule
      )
  },
  {
    path: 'bloodneeded',
    loadChildren: () => 
      import('./shared/sites/blood-needed/blood-needed.module').then(
        (m) => m.BloodNeededModule
      )
  },
  {
    path: 'informations',
    loadChildren: () => 
      import('./shared/sites/informations/informations.module').then(
        (m) => m.InformationsModule
      )
  },
  {
    path: 'donationprocess',
    loadChildren: () => 
      import('./shared/sites/donation-process/donation-process.module').then(
        (m) => m.DonationProcessModule
      )
  },
  {
    path: 'login',
    loadChildren: () => 
      import('./shared/sites/login/login.module').then(
        (m) => m.LoginModule
      )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
