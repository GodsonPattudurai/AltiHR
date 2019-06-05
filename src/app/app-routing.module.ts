import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { LoginComponent } from './login/login.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  { path: 'app', component: BaseLayoutComponent, children: [
    { path: 'bank-account', component: BankAccountComponent }
  ]},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
