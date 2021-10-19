import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { UserDataComponent } from './modules/donator/components/user-data/user-data.component';
import { EditAccountComponent } from './modules/donator/components/edit-account/edit-account.component';
import { UserDonationsComponent } from './modules/donator/components/user-donations/user-donations.component';
import { DonationDetailsComponent } from './modules/donator/components/donation-details/donation-details.component';
import { ProfilePageComponent } from './modules/donator/pages/profile-page/profile-page.component';
import { DonationDetailsPageComponent } from './modules/donator/pages/donation-details-page/donation-details-page.component';

@NgModule({
  declarations: [AppComponent, UserDataComponent, EditAccountComponent, UserDonationsComponent, DonationDetailsComponent, ProfilePageComponent, DonationDetailsPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
