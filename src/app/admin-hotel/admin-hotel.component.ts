import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-admin-hotel',
  templateUrl: './admin-hotel.component.html',
  styleUrls: ['./admin-hotel.component.css']
})
export class AdminHotelComponent implements OnInit {

  hotels : any;
  constructor(private hotelService : HotelService) { }

  ngOnInit(): void {
    this.hotelService.getAllHotel().subscribe(
      data => {
        this.hotels=data;
        console.log(data);
      }
    )
  }

  deletePack(id : number){

  }
  detailsPack(id : number){
    
  }
}
