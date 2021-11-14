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

const MATERIAL_MODULES = [
  MatFormFieldModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
];

@NgModule({
  declarations: [
    AddWorkerPageComponent,
    AddAdminPageComponent,
    AddNewWorkerComponent,
    AddNewAdminComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    ...MATERIAL_MODULES,
  ]
})
export class AdminModule { }
