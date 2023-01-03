import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bio-data',
  templateUrl: './bio-data.component.html',
  styleUrls: ['./bio-data.component.scss']
})
export class BioDataComponent implements OnInit {

  success = false;
  bioData = true;

bioDataform! : FormGroup

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.bioDataform = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  create(){
    this.success = true;
    this.bioData = false;
  }

  login(){
    this.router.navigateByUrl('/auth/login')
  }

}
