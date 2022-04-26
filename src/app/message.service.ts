import { Injectable } from '@angular/core';
import { OthermessageService } from './othermessage.service';

@Injectable()
export class MessageService {
othermsg:string="";
  constructor(private _othermessageService:OthermessageService) { }

  getmessage(){
    return 'sahosofttech sol'
  }
  getmessagefeomotherservice(){
    this.othermsg=this._othermessageService.getothermessage();
    return this.othermsg;
  }
}

