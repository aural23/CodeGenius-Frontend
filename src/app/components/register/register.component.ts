import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  signUpForm: FormGroup;

  constructor(
    private http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder,
    private service:UserService
  ) {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      user_id: ['', Validators.compose([Validators.required,Validators.email])],
      user_password: ['', Validators.required]
    });
  }

  proceedregistration() {
    if (this.signUpForm.valid) {
      const formData = this.signUpForm.value;
      this.service.Proceedregister(formData).subscribe(
        (response: any) => {
          alert('User registration successful. Please proceed to login.');
          this.router.navigate(['login']);
        },
        (error: any) => {
          alert('Error occurred while registering user. Please try again.');
        }
      );
    } else {
      alert('Please enter valid data');
    }

  }

}
