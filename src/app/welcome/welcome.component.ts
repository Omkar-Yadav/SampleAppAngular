import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message: String = 'welcome message';
name: '';

  constructor(private route: ActivatedRoute) { }

   ngOnInit() {
    this.message = 'current message';
  // alert( this.route.snapshot.params['name']);
   this.name = this.route.snapshot.params['name'];
   console.log(name);

    }

}
