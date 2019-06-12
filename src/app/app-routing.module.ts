import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { LoginComponent } from './login/login.component';
import { HolidayComponent } from './holiday/holiday.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { AuthGuard } from './auth-guard.service';
import { ZetaFaqComponent } from './zeta-faq/zeta-faq.component';
import { HelpComponent } from './help/help.component';
import { MedicalInsuranceComponent } from './medical-insurance/medical-insurance.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TaxComponent } from './tax/tax.component';
import { EmployeeContactComponent } from './employee-contact/employee-contact.component';
import { FlexibleBenefitOptionsComponent } from './flexible-benefit-options/flexible-benefit-options.component';
import { PfOptionsComponent } from './pf-options/pf-options.component';

const routes: Routes = [
  { path: 'app', canActivate: [AuthGuard], component: BaseLayoutComponent, children: [
    { path: 'bank-account', component: BankAccountComponent },
    { path: 'holiday', component: HolidayComponent },
    { path: 'zeta-faq', component: ZetaFaqComponent },
    { path: 'help', component: HelpComponent },
    { path: 'medical-insurance', component: MedicalInsuranceComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'tax', component: TaxComponent },
    { path: 'employee-contact', component: EmployeeContactComponent },
    { path: 'flexible-benefit-options', component: FlexibleBenefitOptionsComponent },
    { path: 'pf-options', component: PfOptionsComponent }
  ]},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
