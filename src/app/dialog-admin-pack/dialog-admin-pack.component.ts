import { TestService } from './../test.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-admin-pack',
  templateUrl: './dialog-admin-pack.component.html',
  styleUrls: ['./dialog-admin-pack.component.css']
})
export class DialogAdminPackComponent implements OnInit {

  constructor( private testService : TestService) { }
  packs : any;
  ngOnInit(): void {
    this.packs = this.testService.packData;
  }

}
