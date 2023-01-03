import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { QuickOptionComponent } from './quick-option/quick-option.component';
import { OTPPageComponent } from './otp-page/otp-page.component';
import { BioDataComponent } from './bio-data/bio-data.component';
import { NzFormModule } from 'ng-zorro-antd/form';
// import { FormsMo/dule } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AuthComponent,
    SignInPageComponent,
    ResetPasswordComponent,
    QuickOptionComponent,
    OTPPageComponent,
    BioDataComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // exports: [SignInPageComponent,]
})
export class AuthModule { }
