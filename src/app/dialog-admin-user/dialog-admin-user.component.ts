import { TestService } from './../test.service';
import { UserPackService } from './../user-pack.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-admin-user',
  templateUrl: './dialog-admin-user.component.html',
  styleUrls: ['./dialog-admin-user.component.css']
})
export class DialogAdminUserComponent implements OnInit {

  receivedUser : any;
  constructor( private userPackService : UserPackService , public _testService : TestService) { }

  ngOnInit(): void {
    this.receivedUser = this._testService.myData;
    console.log(this.receivedUser);
  }

}
