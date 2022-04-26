import { Component, OnInit } from '@angular/core';
import { NumlistService } from '../numlist.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
  providers:[NumlistService]
})
export class Comp1Component implements OnInit {
list1:number[];
  constructor(private _numlistService:NumlistService) { }

  ngOnInit() {
    this.list1=this._numlistService.getnumber();
  }
addnumber(val:any){
     this._numlistService.addnumber(val);
     this.list1=this._numlistService.getnumber();
}
}