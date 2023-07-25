import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isSignIn: boolean = false;

  signInForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    username: new FormControl('')
  })

  constructor(private router:Router,
    private authService:AuthService){


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
   if(this.signInForm.valid){
    let username = this.signInForm.value.username || '';
    let password = this.signInForm.value.password || '';
    this.authService.login(username, password).then((success) => {
      if (success) {
        // Authentication successful
        alert("user login succesfully...")
        this.router.navigate(['/contacts'])

      } else {
        // Authentication failed
        alert("Invalid Credentials...")
        console.log('Invalid credentials');
      }
    });
   }
  }
  onClicksignIn_p() {
    this.isSignIn = false
  }
  onCreateAccount_p() {
    this.isSignIn = true
  }
}