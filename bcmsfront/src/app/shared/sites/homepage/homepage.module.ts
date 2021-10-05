import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HomepagePageComponent } from './pages/homepage-page/homepage-page.component';
import { HomepageRoutingModule } from './homepage-routing.module';

@NgModule({
  declarations: [
    HomepagePageComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
