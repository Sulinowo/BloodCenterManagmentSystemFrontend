import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetPasswordPageComponent } from './pages/set-password-page/set-password-page.component';

const routes: Routes = [{ path: '', component: SetPasswordPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetPasswordRoutingModule {}
