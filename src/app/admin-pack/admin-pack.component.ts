import { PackService } from './../pack.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-pack',
  templateUrl: './admin-pack.component.html',
  styleUrls: ['./admin-pack.component.css']
})
export class AdminPackComponent implements OnInit {
  packs : any;
  constructor( private packService : PackService) { }

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

  }

  detailsPack(id : number){
    
  }
}
