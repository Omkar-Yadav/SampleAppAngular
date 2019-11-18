import { WebsocketService } from './../service/websocket.service';
import { ChatService } from './../service/chat.service';
import { SocketServiceService } from './../service/socket-service.service';
import { MatTableModule, MatCardModule } from '@angular/material';
import { WelcomeDataService } from './../service/data/welcome-data.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as Rx from 'rxjs/Rx';
import { runInThisContext } from 'vm';
import { Options } from 'ng5-slider';


@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
  providers: [SocketServiceService, ChatService, WebsocketService]
})

export class FeaturesComponent implements OnInit {


      messageFromService: string ;
      deviceArray: any ;
  WebsocketService: WebsocketService;

  value: number = 4;
  options: Options = {
    floor: 0,
    ceil: 20
  };

  // slider = document.getElementById("myRange");
  // output = document.getElementById("demo");
  // output.innerHTML = this.slider.value;





   
  //  slider.oninput = function() {
  //   output.innerHTML = this.value;
  // }
 

  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService,
    private mat: MatCardModule,
    private chat: ChatService,
    private chatService: ChatService,
    private websocket: WebsocketService
  ) {
    // chatService.messages.subscribe(msg => {
    //   console.log("Response from websocket: " + msg);
    // });

  }





  ngOnInit() {
    this.GetDeviceData();
    // this.chat.messages.subscribe(msg => {
    //   console.log(msg);
    // })
  }


  GetWelcomeMessage() {
   console.log( this.service.getWelcomeData());
   this.service.getWelcomeData().subscribe(
    response => this.handleSuccessfulResponse(response),
    error => this.handleErrorResponse(error)
   );
  }

  // sendMsg() {
  //   this.chat.sendMsg("THIS IS TEST MSGGG ");
  // }


  private message = {
		author: 'tutorialedge',
		message: 'this is a test message'
	}

  sendMsg(type, text, id, deviceType, devicename, roomId, roomname, status, intensity, date) {
    console.log('new message from client to websocket: ', this.message);
    this.websocket.sendText(type, text, id, deviceType, devicename, roomId, roomname, status, intensity, date);
    }

    switchClicked(event, item) {
      console.log(event.srcElement.checked);
      console.log(item.value.room.roomName);
      console.log(event.srcElement.toString());



      this.sendMsg(
       'Device_Message',
       'This is message regarding changing device status ',
        1,
        item.value.device.deviceType,
        item.value.device.deviceName,
        item.value.room.roomId,
        item.value.room.roomName,
        event.srcElement.checked,
        '3',
        new Date()
        );
  }


 


  sliderClicked(event, item, index) {
    debugger
   // console.log(event.target.value);
    console.log(item.value.room.roomName);
  //  console.log(event.srcElement.toString());

  console.log(event);
  console.log(index);

    // this.sendMsg(
    //  'Device_Message',
    //  'This is message regarding changing device status ',
    //   1,
    //   item.value.device.deviceType,
    //   item.value.device.deviceName,
    //   item.value.room.roomId,
    //   item.value.room.roomName,
    //   event,
    //   '3',
    //   new Date()
    //   );
}


    formatLabel(value: number) {
      if (value >= 5) {
        return Math.round(value / 1000) + 'k';
      }
      return value;
    }

    CheckIfFan(device) {
      if(device === 'Fan' || device === 'Bulb' ) {
      return true;
    } else {
        return false;
      }

    }


  GetDeviceData() {
    console.log( this.service.getDeviceData());
    this.service.getDeviceData().subscribe(
     response => this.handleSuccessfulResponse(response),
     error => this.handleErrorResponse(error)
    );
   }

  handleSuccessfulResponse(response) {
   console.log(response);
   this.messageFromService = response;
  if (Array.isArray(response)) {
    this.deviceArray = response;

    console.log(this.deviceArray[0].id);
   console.log(this.deviceArray.length);
  }
  }
     handleErrorResponse(error) {
     this.messageFromService = error.message;
    }
}