import { Component, OnInit } from '@angular/core';
import { NumlistService } from '../numlist.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
  providers:[NumlistService]
})
export class Comp2Component implements OnInit {
list2:number[];
  constructor(private _numlistService:NumlistService) { }

  ngOnInit() {
    this.list2=this._numlistService.getnumber()
  }
    addnumber(val:any){
       this._numlistService.addnumber(val);
       this.list2=this._numlistService.getnumber()
    }
}
