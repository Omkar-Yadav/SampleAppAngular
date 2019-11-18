import { HardCodedAuthenticationService } from './../service/hard-coded-authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  userloggedin = false;
  constructor( private hardCodedAuthenticationService: HardCodedAuthenticationService) { }

  ngOnInit() {
   this.userloggedin = this.hardCodedAuthenticationService.isUserLoggedIn();
  }

}
