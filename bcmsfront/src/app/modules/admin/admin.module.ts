import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddWorkerPageComponent } from './pages/add-worker-page/add-worker-page.component';
import { AddAdminPageComponent } from './pages/add-admin-page/add-admin-page.component';
import { AddNewWorkerComponent } from './components/add-new-worker/add-new-worker.component';
import { AddNewAdminComponent } from './components/add-new-admin/add-new-admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ShowWorkersPageComponent } from './pages/show-workers-page/show-workers-page.component';
import { ShowAllWorkersComponent } from './components/show-all-workers/show-all-workers.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AdminProfilePageComponent } from './pages/admin-profile-page/admin-profile-page.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { EditAdminProfileComponent } from './components/edit-admin-profile/edit-admin-profile.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminPanelPageComponent } from './pages/admin-panel-page/admin-panel-page.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ResetPasswordPageComponent } from './pages/reset-password-page/reset-password-page.component';
import { MatCardModule } from '@angular/material/card';

const MATERIAL_MODULES = [
  MatFormFieldModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatDialogModule,
  MatCardModule,
];

@NgModule({
  declarations: [
    AddWorkerPageComponent,
    AddAdminPageComponent,
    AddNewWorkerComponent,
    AddNewAdminComponent,
    ShowWorkersPageComponent,
    ShowAllWorkersComponent,
    AdminProfilePageComponent,
    AdminProfileComponent,
    EditAdminProfileComponent,
    AdminPanelComponent,
    AdminPanelPageComponent,
    ResetPasswordComponent,
    ResetPasswordPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    ...MATERIAL_MODULES,
  ],
})
export class AdminModule {}
