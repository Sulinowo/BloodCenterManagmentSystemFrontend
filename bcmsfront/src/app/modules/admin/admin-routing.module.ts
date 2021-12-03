import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminPageComponent } from './pages/add-admin-page/add-admin-page.component';
import { AddWorkerPageComponent } from './pages/add-worker-page/add-worker-page.component';
import { AdminPanelPageComponent } from './pages/admin-panel-page/admin-panel-page.component';
import { AdminProfilePageComponent } from './pages/admin-profile-page/admin-profile-page.component';
import { ShowWorkersPageComponent } from './pages/show-workers-page/show-workers-page.component';

const routes: Routes = [
  { path: 'add/worker', component: AddWorkerPageComponent},
  { path: 'add/admin', component: AddAdminPageComponent},
  { path: 'workers', component: ShowWorkersPageComponent},
  { path: 'profile', component: AdminProfilePageComponent},
  { path: 'panel', component: AdminPanelPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
