import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetNewPasswordRoutingModule } from './set-new-password-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SetNewPasswordPageComponent } from './page/set-new-password-page/set-new-password-page.component';
import { SetNewPasswordComponent } from './components/set-new-password/set-new-password.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [SetNewPasswordComponent, SetNewPasswordPageComponent],
  imports: [
    CommonModule,
    SetNewPasswordRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
  ],
})
export class SetNewPasswordModule {}
