import { SocketServiceService } from './socket-service.service';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { WebsocketService } from './websocket.service';

const CHAT_URL = 'ws://192.168.43.155:81';

export interface Message {
	author: string,
	message: string
}



@Injectable()
export class ChatService {

/*
  public messages: Subject<Message>;

	constructor(wsService: WebsocketService) {
		this.messages = <Subject<Message>>wsService
			.connect(CHAT_URL)
			.pipe(map((response: MessageEvent): Message => {
				let data = JSON.parse(response.data);
				return {
					author: data.author,
					message: data.message
				}
			}));
	}

*/

constructor() {
}





















  // messages: Subject<any>;

  // // Our constructor calls our wsService connect method
  // constructor(private wsService: SocketServiceService) {
  //   this.messages = <Subject<any>>wsService
  //     .connect()
  //     .map((response: any): any => {
  //       return response;
  //     })
  //  }

  // // Our simplified interface for sending
  // // messages back to our socket.io server
  // sendMsg(msg) {
  //   this.messages.next(msg);
  // }

}