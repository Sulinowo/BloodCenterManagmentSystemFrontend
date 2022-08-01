import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetNewPasswordPageComponent } from '../set-new-password/page/set-new-password-page/set-new-password-page.component';

const routes: Routes = [{ path: '', component: SetNewPasswordPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetNewPasswordRoutingModule {}
