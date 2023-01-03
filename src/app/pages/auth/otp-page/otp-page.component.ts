import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-page',
  templateUrl: './otp-page.component.html',
  styleUrls: ['./otp-page.component.scss']
})
export class OTPPageComponent implements OnInit {
  otpForm! : FormGroup

  constructor(
    private router: Router,
    private fb: FormBuilder
    ) {}

  ngOnInit(): void {
    this.otpForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  verify(){
    this.router.navigateByUrl('/auth/bio-data')
  }

}
