import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
//import { HttpClientModule } from '@angular/common/http';

export class HelloworldBean {
  constructor(
    public message: string
  ) {}
  }

  export class Device {
    constructor(
      public deviceId: string,
      public deviceName: string,
      public deviceType: string
    ) {}
    }

  export class Deviceinfo {
    constructor(
      public id: string,
      public createdAt: string,
      public updatedAt: string,
      public userId: string,
      public device: Device,
      public room: Room
    ) {}
    }

        
  export class Room {
    constructor(
      public roomId: string,
      public roomName: string
    ) {}
    }

@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  getWelcomeData() {
    console.log('called welcomedata');
    return this.http.get <HelloworldBean>('http://localhost:8892/waspace/');
  }


  getDeviceData() {
    console.log('called deviceData');
    return this.http.get('http://localhost:8892/waspace/userDevice/user/1');
  }
}
