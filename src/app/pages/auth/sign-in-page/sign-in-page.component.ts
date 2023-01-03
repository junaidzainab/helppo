import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
// import { Observable, Observer } from 'rxjs';


@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {
  loginForm!: FormGroup;
  logIn = true;
  signin = false;

  // submitForm(): void {
  //   if (this.validateForm.valid) {
  //     console.log('submit', this.validateForm.value);
  //   } else {
  //     Object.values(this.validateForm.controls).forEach(control => {
  //       if (control.invalid) {
  //         control.markAsDirty();
  //         control.updateValueAndValidity({ onlySelf: true });
  //       }
  //     });
  //   }
  // }

  constructor(
    private router: Router,
    private fb: FormBuilder
    ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  login(){
    this.router.navigateByUrl('/auth/quick-option')
  }

  proceed(){
    this.router.navigateByUrl('/auth/otp-page')
  }

  signIn(){
    this.logIn = false;
    this.signin = true
  }
}

// }
