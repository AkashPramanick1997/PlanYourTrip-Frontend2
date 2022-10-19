import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  hide: boolean = false;
  email : any;
  password : any;
  msg : any;
  constructor( private fb: FormBuilder , private router : Router , 
                private snackbar : MatSnackBar) { }

  ngOnInit( ): void {
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  })


  onLogin( msg : any , action : any) {
    if (!this.loginForm.valid) {
      return;
    }
    if(this.email==="admin@gmail.com" && this.password==="12345"){
      localStorage.setItem('session' , "akash");
      this.snackbar.open(msg,action , { duration : 3000});
      this.router.navigate(['/admin']);
    }else{
      this.msg = "Enter valid Email and Password"
    }
  }
}
