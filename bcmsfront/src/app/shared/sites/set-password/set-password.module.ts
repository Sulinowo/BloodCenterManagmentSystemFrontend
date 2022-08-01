import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetPasswordComponent } from './components/set-password/set-password.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SetPasswordRoutingModule } from './set-password-routing.module';
import { SetPasswordPageComponent } from './pages/set-password-page/set-password-page.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [SetPasswordComponent, SetPasswordPageComponent],
  imports: [
    CommonModule,
    SetPasswordRoutingModule,
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
export class SetPasswordModule {}
