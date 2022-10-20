import { Router } from '@angular/router';
import { AdminOrganizationService } from './../admin-organization.service';
import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
declare var window : any;
@Component({
  selector: 'app-admin-hotel',
  templateUrl: './admin-hotel.component.html',
  styleUrls: ['./admin-hotel.component.css']
})
export class AdminHotelComponent implements OnInit {

  hotels : any;
  formModal: any;
  organizations : any;
  organizationId : any;
  HotelName : any;
  HotelCity : any;
  constructor(private hotelService : HotelService , 
              private adminOrgService : AdminOrganizationService , 
              private router : Router) { }

  ngOnInit(): void {
    this.hotelService.getAllHotel().subscribe(
      data => {
        this.hotels=data;
        console.log(data);
      }
    );
      this.adminOrgService.getAllOrganization().subscribe(
        data => {
          this.organizations = data;
        }
      );
  }

  deletePack(id : number){

  }
  detailsPack(id : number){
    
  }

  updatePack(id : any){
    
  }

  onClick(){
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );
    this.formModal.show();
  }
  closeModal(){
    this.formModal.hide();
  }
  onSubmit(){
    var hotel = {
        "hotelName": this.HotelName,
        "hotelCity": this.HotelCity
    }

    this.hotelService.addHotelByOrganizationId(this.organizationId,hotel).subscribe(
      data => {
        this.router.navigate(['/adminhotel']);
        window.location.reload();
      }
    )
    
  }
}
