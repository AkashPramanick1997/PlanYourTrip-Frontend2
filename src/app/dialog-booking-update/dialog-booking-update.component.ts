import { Router } from '@angular/router';
import { BookingsService } from './../bookings.service';
import { UserPackService } from './../user-pack.service';
import { Component, OnInit } from '@angular/core';
import { timeStamp } from 'console';
import { TestService } from '../test.service';
import { UserPack } from '../user-pack'
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog-booking-update',
  templateUrl: './dialog-booking-update.component.html',
  styleUrls: ['./dialog-booking-update.component.css']
})
export class DialogBookingUpdateComponent implements OnInit {

  constructor( private testService : TestService , 
                private bookingService : BookingsService ,
                private router : Router ,
                private snackbar : MatSnackBar) { }
  bookId : any;
  booking : UserPack = new UserPack();
  getPricePack : any;
   public test : any ;
  ngOnInit(): void {
    this.bookId = this.testService.bookingId;
    this.getPricePack = this.testService.packPrice;
    this.bookingService.getDetailsByUserPackId(this.bookId).subscribe(
      data => {
        this.booking = data;
        this.test = data ;
      }
    )
  }
  

  onSubmit( msg : any , action : any){
    console.log(this.test.pack.PackPrice);
    console.log(this.booking);
    this.bookingService.updateBooking(this.booking , this.bookId).subscribe(
      data =>{
        console.log("success");
        this.snackbar.open(msg , action , {duration : 3000});
        this.router.navigate(['/bookings']);
        window.location.reload();
        

      }
    )
  }

}
