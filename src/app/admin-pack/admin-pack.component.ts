import { DialogAdminPackComponent } from './../dialog-admin-pack/dialog-admin-pack.component';
import { TestService } from './../test.service';
import { Router } from '@angular/router';
import { PackService } from './../pack.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgConfirmService } from 'ng-confirm-box';
declare var window : any;
@Component({
  selector: 'app-admin-pack',
  templateUrl: './admin-pack.component.html',
  styleUrls: ['./admin-pack.component.css']
})
export class AdminPackComponent implements OnInit {
  packs : any;
  formModal : any;
  packName : any;
  packCity : any;
  packPrice : any;
  packRating : any;
  
  constructor( private packService : PackService , private router : Router,
                private testService : TestService ,
                private dialog : MatDialog ,
                private confirmService : NgConfirmService) { }

  ngOnInit(): void {
    this.packService.getAllPack().subscribe(
      data =>
      {
        this.packs=data;
        console.log(data);
      }
    )
  }

  deletePack(id : number){
    this.confirmService.showConfirm("Are You Sure?",
    () => {
      this.packService.deletePackById(id).subscribe(
        data =>{
          this.router.navigate(['/adminpack']);
          window.location.reload();
        }
      )
    },
    () =>{

    });
  }

  detailsPack(id : number){
    this.packService.packDetailsById(id).subscribe(
      data => {
        this.testService.packData = data;
        this.dialog.open(DialogAdminPackComponent);
      }
    )
  }

  onClick(){

    this.formModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );
    this.formModal.show();
  }

  addPackage(){
    var org = {
      "packName" : this.packName,
      "packCity" : this.packCity,
      "packPrice" : this.packPrice,
      "packRating" : this.packRating
    }
    this.packService.addNewPack(org).subscribe(
      data => {
        this.formModal.hide();
        this.router.navigate(['/adminpack']);
        window.location.reload();
      }
    )

  }

  closeModal(){
    this.formModal.hide();
  }

  updatePack(id : any){

  }
}
