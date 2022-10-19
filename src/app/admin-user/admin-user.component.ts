import { DialogAdminUserComponent } from './../dialog-admin-user/dialog-admin-user.component';
import { Router } from '@angular/router';
import { UserPackService } from './../user-pack.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TestService } from '../test.service';
import { NgConfirmService } from 'ng-confirm-box';
declare var window : any;
@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {

  formModal: any;
  userPack :any;
  uPack : any;
  sendPack : any;
  constructor( private userPackService : UserPackService , private router : Router ,
               private dialog : MatDialog , private _testService : TestService ,
               private confirmService : NgConfirmService) { }
 

  ngOnInit(): void {
    this.userPackService.getallBookings().subscribe(
      data => {
        this.userPack = data;
        console.log(data);
      }
    )
  }

  deletePack(num : number){
    this.confirmService.showConfirm("Are You Sure To Delete ?",
    () => {
      this.userPackService.deleteBooking(num).subscribe(
        data => {
          console.log("Success");
        }
      )
      this.router.navigate(['/adminuser'])
    },
    () => {

    }
    )
  }


  detailsPack(id : number){
    this.userPackService.getDetailsById(id).subscribe(
      data => {
        this.uPack = data;
        this.sendPack = data;
        this._testService.myData = data ;
      }
    )
    // this.formModal = new window.bootstrap.Modal(
    //   document.getElementById("exampleModal")
    // );
    // this.formModal.show();
    this.dialog.open(DialogAdminUserComponent);
  }

  closeModal(){
    this.formModal.hide();
  }

}
