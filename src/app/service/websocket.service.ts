import { Message } from './chat.service';
import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/Rx';


@Injectable()
export class WebsocketService {

  constructor() { }

 exampleSocket = new WebSocket('ws://192.168.43.155:81');




sendText(type, text, id, deviceType, devicename, roomId, roomname, status, intensity, date) {
  var msg = {
    type: type,
    text: text,
    id:   id,
    deviceType: deviceType,
    devicename: devicename,
    roomId: roomId,
    roomname: roomname,
    status: status,
    intensity: intensity,
    date: date
  };
  this.exampleSocket.send(JSON.stringify(msg));
}
exampleSocket.onmessage = function (event) {
  console.log(event.data);
};


};
