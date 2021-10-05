import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloodNeededPageComponent } from './pages/blood-needed-page/blood-needed-page.component';

const routes: Routes = [
  { path: '', component: BloodNeededPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloodNeededRouting {}
