import { HardCodedAuthenticationService } from './../service/hard-coded-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  errorMessage = 'Invalid credentials';
  invalidcreds = false;
  constructor(private router: Router, private hardCodedAuthenticationService: HardCodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {

    if (this.hardCodedAuthenticationService.authenticate(this.username, this.password)) {
      this.router.navigate(['/welcome', this.username]);
      this.invalidcreds = false;
    } else {
      this.invalidcreds = true;
    }
 }

}
