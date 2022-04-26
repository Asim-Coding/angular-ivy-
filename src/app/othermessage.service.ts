import { Injectable } from '@angular/core';

@Injectable()
export class OthermessageService {

  constructor() { }
  getothermessage(){
    return 'message from other servcie'
  }

}