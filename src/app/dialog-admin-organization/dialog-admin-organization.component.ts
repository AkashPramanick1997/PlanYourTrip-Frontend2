import { TestService } from './../test.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-admin-organization',
  templateUrl: './dialog-admin-organization.component.html',
  styleUrls: ['./dialog-admin-organization.component.css']
})
export class DialogAdminOrganizationComponent implements OnInit {
  public receivedOrg : any;
  constructor( public testService : TestService) { }

  ngOnInit(): void {
    this.receivedOrg = this.testService.orgData;
  }

}
