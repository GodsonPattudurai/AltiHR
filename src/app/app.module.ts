import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatNativeDateModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BankAccountComponent } from './bank-account/bank-account.component';

import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';
import { LoginComponent } from './login/login.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { HolidayComponent } from './holiday/holiday.component';
import { ZetaFaqComponent } from './zeta-faq/zeta-faq.component';
import { HelpComponent } from './help/help.component';
import { MedicalInsuranceComponent } from './medical-insurance/medical-insurance.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TaxComponent } from './tax/tax.component';
import { EmployeeContactComponent } from './employee-contact/employee-contact.component';
import { FlexibleBenefitOptionsComponent } from './flexible-benefit-options/flexible-benefit-options.component';
import { PfOptionsComponent } from './pf-options/pf-options.component';


let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('280647798739-kkjdt052itbnghnk5enrhni7l3hednfo.apps.googleusercontent.com')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    BankAccountComponent,
    LoginComponent,
    BaseLayoutComponent,
    HolidayComponent,
    ZetaFaqComponent,
    HelpComponent,
    MedicalInsuranceComponent,
    WelcomeComponent,
    TaxComponent,
    EmployeeContactComponent,
    FlexibleBenefitOptionsComponent,
    PfOptionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    SocialLoginModule,
    AppRoutingModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
