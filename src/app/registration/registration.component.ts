import { Router } from '@angular/router';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user  = new User();
  msg ='';
  constructor( private service : RegistrationService, private router: Router , private snackbar : MatSnackBar) { }

  ngOnInit(): void {
  }

  onRegistration( message : any , action : any){
    this.service.userRegistration(this.user).subscribe(
      data=>{console.log("success");
      this.msg="Registration Successfull!"
      this.snackbar.open(message , action , {duration : 2000});
      this.router.navigate(['/login'])
    } ,
    error =>{
      console.log("Ereor");
      this.msg="Error";
    }
    )
  }
}
