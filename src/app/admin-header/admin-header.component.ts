import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor( private router : Router) { }
  session : any;
  ngOnInit(): void {
    this.session =localStorage.getItem('session');
  }

  toggleSidebar(){
    
  }
  logOut(){
    this.router.navigate(['/home'])
  }
}
