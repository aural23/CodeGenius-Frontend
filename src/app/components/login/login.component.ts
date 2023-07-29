import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isSignIn: boolean = false;


  constructor(private router:Router,private builder:FormBuilder, private service:UserService,
    private AuthService:AuthService){

      sessionStorage.clear();

  }

  userdata:any;

  signInForm = this.builder.group({
    username:this.builder.control('',Validators.required),
    password:this.builder.control('',Validators.required)

  })

  // onSignIn_a(){
  //   if(this.signInForm.valid){
  //     this.service.(this.signInForm.value.username).subscribe(res => {
  //       this.userdata=res;
  //       console.log(this.userdata);

  //     })
  //   }

  // }
  
  onSignIn() {
   if(this.signInForm.valid){
    let username = this.signInForm.value.username || '';
    this.AuthService.login(username).subscribe(res =>{
      this.userdata=res;
      console.log("RESPONSE",this.userdata);
      console.log(this.userdata[0].user_password);
      console.log(this.signInForm.value.password);
      if(this.userdata[0].user_password === this.signInForm.value.password){
        sessionStorage.setItem('user_id',this.userdata[0]._id);
        sessionStorage.setItem('user_name',this.userdata[0].user_id);
        this.router.navigate(['chat']);

      }else{
        alert('Invalid password')
      }
    })
    
  //   .then((success) => {
  //     if (success) {
  //       // Authentication successful
  //       alert("user login succesfully...")
  //       this.router.navigate(['/contacts'])

  //     } else {
  //       // Authentication failed
  //       alert("Invalid Credentials...")
  //       console.log('Invalid credentials');
  //     }
  //   });
  //  }
  // }
  // onClicksignIn_p() {
  //   this.isSignIn = false
  // }
  // onCreateAccount_p() {
  //   this.isSignIn = true
  }
}
}