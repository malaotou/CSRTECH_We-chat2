import { Component, OnInit } from '@angular/core';
import { Chatgroup } from '../../../modules/chatgroup'
@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.component.html',
  styleUrls: ['./chatlist.component.css']
})
export class ChatlistComponent implements OnInit {
  chatlist:Array<Chatgroup>=[];
  currntitem:any;
  
  constructor() {
   }

  ngOnInit() {
  }
  checkthis(val:any){

    this.currntitem=val;
    console.log('current '+val);
  }
}
