import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isSignIn: boolean = false;

  signInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private router:Router){

  }

  get formControlLoginForm() {
    return this.signInForm.controls;
  }
  onSignIn() {

    console.log("vales-=-------", this.signInForm.value.password)
    this.router.navigate(['/contacts'])
  }

}