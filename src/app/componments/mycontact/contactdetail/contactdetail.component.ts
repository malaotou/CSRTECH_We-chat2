import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Route,Router } from '@angular/router'
import { Companys } from '../../../demoData/companys'
import { SocketIoDemoService } from '../../../services/socket-io-demo.service'

@Component({
  selector: 'app-contactdetail',
  templateUrl: './contactdetail.component.html',
  styleUrls: ['./contactdetail.component.css'],
  providers:[SocketIoDemoService]
})
export class ContactdetailComponent implements OnInit {
  @Input() company: Array<any>;
  companyInfo:any;
  constructor(private router:Router,public socketService:SocketIoDemoService) {

  }

  ngOnInit() {
    console.log(this.company);
  }
  ngOnChanges() {
    this.companyInfo =this.company;
    console.log(this.companyInfo);
  }
  chat(id){
    // 加入当前所选的Room
  console.log(this.company);
  console.log(this.company[0].id);
    this.socketService.joinRoom(this.company[0].id,localStorage.getItem('uname'));
    //this.socketService.joinRoom(room,localStorage.getItem('uname'));
    // 跳转到登录页面
    this.router.navigate(['/mychat'],{ queryParams: { id:id}});
  }

}
