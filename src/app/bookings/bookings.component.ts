import { Router } from '@angular/router';
import { NgConfirmService } from 'ng-confirm-box';
import { TestService } from './../test.service';
import { UserPackService } from './../user-pack.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { BookingsService } from '../bookings.service';
import { UserPack } from '../user-pack';
import { DialogAdminUserComponent } from '../dialog-admin-user/dialog-admin-user.component';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  _userPacks : any;
  session : any;
  

  constructor( private _bboking_service : BookingsService , 
                private dialog : MatDialog , 
                private userPackService : UserPackService , 
                private testService : TestService , 
                private confirmService : NgConfirmService,
                private router : Router
                ) { }


  ngOnInit(): void {

    let data : any = localStorage.getItem('token');
    this.session = JSON.parse(data);

    this._bboking_service.getAllBookingByUserId(this.session.userId).subscribe(
      data => {
        this._userPacks = data;
        console.log(data)
      }
    )
    }
    deleteBooking( id : any){
      this.confirmService.showConfirm("Are You Sure To Delete?",
      () => {
        this.userPackService.deleteBooking(id).subscribe(
          data =>
          {   
            this.router.navigate(['/bookings'])
          }
        )
      },
      () => {
      }
      )
    }
    detailsBooking( id : any){
      this.userPackService.getDetailsById(id).subscribe(
        data =>{
          this.testService.myData = data;
        }
      )
      this.dialog.open(DialogAdminUserComponent);
    }
}
