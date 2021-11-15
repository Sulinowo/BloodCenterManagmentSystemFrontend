import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminPageComponent } from './pages/add-admin-page/add-admin-page.component';
import { AddWorkerPageComponent } from './pages/add-worker-page/add-worker-page.component';
import { ShowWorkersPageComponent } from './pages/show-workers-page/show-workers-page.component';

const routes: Routes = [
  { path: 'add/worker', component: AddWorkerPageComponent},
  { path: 'add/admin', component: AddAdminPageComponent},
  { path: 'workers', component: ShowWorkersPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
