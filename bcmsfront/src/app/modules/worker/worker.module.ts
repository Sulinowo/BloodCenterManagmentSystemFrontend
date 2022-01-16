import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExaminationsPageComponent } from './pages/examination/examinations-page/examinations-page.component';
import { AddExaminationComponent } from './components/examinations/add-examination/add-examination.component';
import { UpdateExaminationComponent } from './components/examinations/update-examination/update-examination.component';
import { MatTableModule } from '@angular/material/table';
import { WorkerRoutingModule } from './worker-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../../shared/shared.module';
import { BloodDonatorModule } from './modules/blood-donator/blood-donator.module';
import { BloodStorageModule } from './modules/blood-storage/blood-storage.module';
import { DonationModule } from './modules/donation/donation.module';
import { ExaminationDoctorPageComponent } from './pages/examination/examination-doctor-page/examination-doctor-page.component';
import { BloodExaminedDonationPageComponent } from './pages/donation/blood-examined-donation-page/blood-examined-donation-page.component';
import { DonationBloodExaminedComponent } from './components/donation/donation-blood-examined/donation-blood-examined.component';
import { ExaminationEditPageComponent } from './pages/examination/examination-edit-page/examination-edit-page.component';
import { EditExaminationComponent } from './components/examinations/edit-examination/edit-examination.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { WorkerProfilePageComponent } from './pages/worker-profile-page/worker-profile-page.component';
import { WorkerProfileComponent } from './components/worker-profile/worker-profile.component';
import { EditWorkerProfileComponent } from './components/edit-worker-profile/edit-worker-profile.component';
import { WorkerPanelComponent } from './components/worker-panel/worker-panel.component';
import { WorkerPanelPageComponent } from './pages/worker-panel-page/worker-panel-page.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ResetPasswordPageComponent } from './pages/reset-password-page/reset-password-page.component';
import { MatCardModule } from '@angular/material/card';
import { ExaminationDoctorEditPageComponent } from './pages/examination/examination-doctor-edit-page/examination-doctor-edit-page.component';
import { EditDoctorExaminationComponent } from './components/examinations/edit-doctor-examination/edit-doctor-examination.component';

const MATERIAL_ELEMENTS = [
  MatTableModule,
  MatIconModule,
  MatTabsModule,
  MatInputModule,
  MatButtonModule,
  MatPaginatorModule,
  MatCardModule,
];

@NgModule({
  declarations: [
    ExaminationsPageComponent,
    AddExaminationComponent,
    UpdateExaminationComponent,
    ExaminationDoctorPageComponent,
    BloodExaminedDonationPageComponent,
    DonationBloodExaminedComponent,
    ExaminationEditPageComponent,
    EditExaminationComponent,
    WorkerProfilePageComponent,
    WorkerProfileComponent,
    EditWorkerProfileComponent,
    WorkerPanelComponent,
    WorkerPanelPageComponent,
    ResetPasswordComponent,
    ResetPasswordPageComponent,
    ExaminationDoctorEditPageComponent,
    EditDoctorExaminationComponent,
  ],
  imports: [
    CommonModule,
    WorkerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedModule,
    MATERIAL_ELEMENTS,
    BloodDonatorModule,
    BloodStorageModule,
    DonationModule,
  ],
})
export class WorkerModule {}
