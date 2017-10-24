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
   var chatg1= new Chatgroup('CRM项目管理','assets/images/head1.jpg','那也得确认','09/29/17');
   var chatg2= new Chatgroup('SRM项目管理','assets/images/head.png','明儿再来','09/29/17');
   this.chatlist.push(chatg1); 
   this.chatlist.push(chatg2);   
   }

  ngOnInit() {
  }
  checkthis(val:any){

    this.currntitem=val;
    console.log('current '+val);
  }
}
