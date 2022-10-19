import { MatSnackBar } from '@angular/material/snack-bar';
import { PackService } from './../pack.service';
import { Router } from '@angular/router';
import { LoginUserPackService } from './../login-user-pack.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { UserPack } from '../user-pack';
import { UserPackService } from '../user-pack.service';

declare var window : any;

@Component({
  selector: 'app-user-pack',
  templateUrl: './user-pack.component.html',
  styleUrls: ['./user-pack.component.css']
})
export class UserPackComponent implements OnInit {

  user : User = new User();
  _get_pack_id : number =0 ;

  _newUser : User = new User();
  _userPack : UserPack = new UserPack();

  session : any;
  submitted : boolean = false;

  _checkIn : Date | undefined;
  _checkOut : Date | undefined;
  public  _numberOfPeople :  number = 0;
  _numberOfRooms : number = 0 ;
  _newUserId : number = 0 ;
  formModal: any;
  _packDetails : any;
 public discount : any;
 public  totalAmmount : any;
  public packageAmmount : any;
 public  discountAmmount : any;
 public payAmmount : any;

  constructor(private  _login_user_pack_service : LoginUserPackService , 
              private _user_pack_service : UserPackService ,
              private _router : Router,
              private packageService : PackService ,
              private snackbar : MatSnackBar) { }

  ngOnInit(): void {
    this.user = this._login_user_pack_service._user;
    this._get_pack_id = this._login_user_pack_service._pack_id;
     const _HiUser  = localStorage.getItem('token');

    this.packageService.packDetailsById(this._get_pack_id).subscribe(
      data => {
        this._packDetails = data;
        console.log(this._packDetails);
      }
    )
    let data : any = localStorage.getItem('token');
    this.session = JSON.parse(data);
    console.log(this.session.userId);
    if(this.session == null){
      this._router.navigate(['/home'])
    }
  }

  sss : string = "exampleModal"
  onSubmit(){
    
     this._userPack = {
      "userPackId" : 0,
      "numberOfPeople":this._numberOfPeople,
      "checkIn" : this._checkIn,
      "checkOut" : this._checkOut,
      "numberOfRooms" : this._numberOfRooms
    }
    console.log(this._get_pack_id);
    this.packageService.packDetailsById(this._get_pack_id).subscribe(
      data => {
        this._packDetails = data;
      }
    );

    this.formModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );
    this.packageAmmount = this._packDetails.packPrice;
    console.log(this.packageAmmount);
    console.log("number Of people "+this._numberOfPeople);
    this.totalAmmount = this.packageAmmount * this._numberOfPeople;
    console.log("total Ammount "+this.totalAmmount)
    this.discountAmmount = this.totalAmmount*(5/100);
    console.log("Discount "+this.discountAmmount)
    this.payAmmount=this.totalAmmount-this.discountAmmount;
    console.log("Pay " +this.totalAmmount)
    this.formModal.show();
    // console.log(this._userPack)
    // this._newUserId = this.user.userId;

    // this._user_pack_service.addPackageWithUserId(this._userPack , this._newUserId , this._get_pack_id).subscribe(
    //    data => {
    //     console.log("added")
    //     alert("Booking SuccessFull ! Goto Home Page")
    //     this._router.navigate(['/home'])
    //    }
    // )
  }

  closeModal(){
    this.formModal.hide();
  }

  payNow( msg : any , action : any){

     this._newUserId = this.user.userId;
    this._user_pack_service.addPackageWithUserId(this._userPack , this._newUserId , this._get_pack_id).subscribe(
       data => {
        console.log("added")
        this.formModal.hide();
        this.snackbar.open(msg,action,{duration : 2000})
        this._router.navigate(['/home'])
       }
    )
  }
}
