import { NgConfirmService } from 'ng-confirm-box';
import { DialogAdminOrganizationComponent } from './../dialog-admin-organization/dialog-admin-organization.component';
import { MatDialog } from '@angular/material/dialog';
import { TestService } from './../test.service';
import { Router } from '@angular/router';
import { OrganizationService } from './../organization.service';
import { AdminOrganizationService } from './../admin-organization.service';
import { Component, OnInit } from '@angular/core';
declare var window : any;
@Component({
  selector: 'app-admin-organization',
  templateUrl: './admin-organization.component.html',
  styleUrls: ['./admin-organization.component.css']
})
export class AdminOrganizationComponent implements OnInit {

  formModal: any;
  element : any;
  dataSource : any;
  organizationName : any;
  organizationId : any;
  constructor( private admonOrgService : AdminOrganizationService , 
                private organizationService :OrganizationService ,
                private router : Router,
                private testService : TestService ,
                private dialog : MatDialog ,
                private confirmService : NgConfirmService) { }

  ngOnInit(): void {
    this.admonOrgService.getAllOrganization().subscribe(
      data => {
        this.element= data;
        console.log(data);
        this.dataSource = this.element;
      }
    )
  }
  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  displayedColumns: string[] = ['organizationId','organizationName' , 'action' , 'action1'];
  
  onClick(){
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );
    this.formModal.show();
  }
  closeModal(){
    this.formModal.hide();
  }

  addOrganization(){
    console.log("success");
    var org ={
      "organizationId": this.organizationId,
      "organizationName": this.organizationName,
      "admin": null
  }
  this.organizationService.addOrganization(org).subscribe(
    daata =>
    {
      console.log("success");
      this.formModal.hide();
      this.router.navigate(['/adminorg']);
      
    }
  )
  }
  deleteOrganization(id : number ){

    this.confirmService.showConfirm("Are You Sure?" ,
    () =>{
      this.admonOrgService.deleteOrganization(id).subscribe(
        data => {
          this.router.navigate(['/admin']);
        });
    },
    () =>{ }
    )
  }
  detailsOrg(id : any){
    this.admonOrgService.getOrganizationById(id).subscribe(
      data => {
        this.testService.orgData = data;
        this.dialog.open(DialogAdminOrganizationComponent);
      }
    )
  }
}
