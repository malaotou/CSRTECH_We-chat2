import { Component, OnInit, OnChanges } from '@angular/core';
import { Companys } from "../../demoData/companys"
import { Params, Router, ActivatedRoute } from '@angular/router'
import { Demo4Service } from '../../services/demo4/demo4.service'
@Component({
  selector: 'app-mychat',
  templateUrl: './mychat.component.html',
  styleUrls: ['./mychat.component.css'],
  // styles: [`
  // :host {
  //   display: block;
  //   width:100%;
  //   height:100%;
  // }`],
  providers: [Demo4Service]
})
export class MychatComponent implements OnInit {

  //chatRooms=Companys;
  chatRooms: any = [];
  currentRoom: string;
  chatRoomsList = [''];
  lastMessage: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private demo: Demo4Service
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(item => {
      this.currentRoom = item['id'];
      this.chatRooms.push(
        Companys.find(item => item.id === this.currentRoom)
      );
    });
  }
  goto(id) {
    this.router.navigate(['/mychat'], { queryParams: { id: id } });
    this.currentRoom = id;
  }
  ngOnChage() {
    this.route.queryParams.subscribe(item => {
      this.currentRoom = item['id'];
    });
  }

  getTheLastMsg(data) {
    console.log(data.text)
    this.chatRooms.filter(item => item === this.currentRoom).lastmsg = data.text;
    //this.lastMessage=data.text;
  }
  getcurrentRoom(value) {
    this.currentRoom = value;
    if (this.chatRooms) {
      var rooms = this.chatRooms.find(item => item.id === this.currentRoom);
      if (!rooms) {
        // this.chatRooms.push(
        //   Companys.find(item=>item.id===this.currentRoom)
        // )
        this.router.navigate(['/mychat'], { queryParams: { id: this.currentRoom } });
      }     
    }
  }
}
