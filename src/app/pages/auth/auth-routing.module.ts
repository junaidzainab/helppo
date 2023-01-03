import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { BioDataComponent } from './bio-data/bio-data.component';
import { OTPPageComponent } from './otp-page/otp-page.component';
import { QuickOptionComponent } from './quick-option/quick-option.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login', component: SignInPageComponent
      },
      {
        path: 'bio-data', component: BioDataComponent
      },
      {
        path: 'quick-option', component: QuickOptionComponent
      },
      {
        path: 'reset-account', component: ResetPasswordComponent
      },
      {
        path: 'otp-page', component: OTPPageComponent
      }
    ]
  }
  // {path:'', component:AuthComponent},
  // {
  //   path:'sign-in', component: SignInPageComponent
  // },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
