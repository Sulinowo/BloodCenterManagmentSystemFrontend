import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationsPageComponent } from './pages/informations-page/informations-page.component';

const routes: Routes = [{ path: '', component: InformationsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformationsRoutingModule {}
