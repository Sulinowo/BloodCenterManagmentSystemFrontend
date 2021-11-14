import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminPageComponent } from './pages/add-admin-page/add-admin-page.component';
import { AddWorkerPageComponent } from './pages/add-worker-page/add-worker-page.component';

const routes: Routes = [
  { path: 'add/worker', component: AddWorkerPageComponent},
  { path: 'add/admin', component: AddAdminPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
