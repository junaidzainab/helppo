import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quick-option',
  templateUrl: './quick-option.component.html',
  styleUrls: ['./quick-option.component.scss']
})
export class QuickOptionComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  dashboard(){
    this.router.navigateByUrl('/main/dashboard')
  }

}
