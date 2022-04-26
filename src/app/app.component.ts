import { Component, VERSION } from '@angular/core';
import { MessageService } from './message.service';
import { NumlistService } from './numlist.service';
import { OthermessageService } from './othermessage.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers:[MessageService,OthermessageService]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  msg:string;
  othermsg:string="";
  //we can inject service in constructor
  constructor(private _messageservice:MessageService){

  }
  ngOnInit(){
  // this.msg=this._messageservice.getmessage();
  }
  getmessage(){
    this.msg=this._messageservice.getmessage();
    this.othermsg=this._messageservice.getmessagefeomotherservice();
  }
}
