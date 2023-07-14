import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    username: new FormControl('')
  })

  constructor(private router:Router){

  }
  onSignUp() {
    console.log(this.signUpForm.value)  
      this.router.navigate(['/contacts'])

  }

  get formControlSignUpForm() {
    return this.signUpForm.controls;
  }

  get formControlLoginForm() {
    return this.signInForm.controls;
  }
  onSignIn() {

    console.log("vales-=-------", this.signInForm.value.password)
    this.router.navigate(['/contacts'])
  }
  onClicksignIn_p() {
    this.isSignIn = false
  }
  onCreateAccount_p() {
    this.isSignIn = true
  }

}