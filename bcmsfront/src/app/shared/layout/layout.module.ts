import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { MatButtonModule } from '@angular/material/button';
import { NavListComponent } from './components/nav-list/nav-list.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatProgressSpinnerModule,
];

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutPageComponent,
    LogoComponent,
    NavListComponent,
  ],
  imports: [CommonModule, FlexLayoutModule, RouterModule, ...MATERIAL_MODULES],
  exports: [LayoutPageComponent],
})
export class LayoutModule {}
