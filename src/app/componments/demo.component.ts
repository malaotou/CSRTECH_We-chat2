import { Component, OnInit,OnDestroy } from '@angular/core';
import { SocketIoDemoService } from '../services/socket-io-demo.service';
import { ApiServiceService } from '../services/http/demo/api-service.service'
import { AuthenticateService } from '../services/authenticate.server'
import { user } from '../modules/user'
import {} from 'jwt'
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  providers:[SocketIoDemoService,
              ApiServiceService,
              AuthenticateService]
})
export class DemoComponent implements OnInit {
  messages = [];
  connection;
  message;
  apimessae;
  constructor(private ioService:SocketIoDemoService,
              private httpService:ApiServiceService,
              private authenticate:AuthenticateService) {

    
    //var user=localStorage.getItem('token');
    // if(user){
      //this.login();
    // }
    //this.getApiMessages();
    //this.register();
    this.authenticate.isAuthenticated();
   }
   
  ngOnInit() {
    this.connection=this.ioService.getMessage().subscribe(message=>{
      this.messages.push(message);     
    });
   
  }
  // sendMessage(val:string){
  //   this.ioService.sendMessage(val,localStorage.getItem('token'));
  //   this.message = '';
  // }
  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  login(){
    console.log('login');
    var u=new user();
    u.name="laoma";
    u.password='password';
    
    this.httpService.login(u);
  }
  register(){
    console.log('reg');
    this.httpService.register();
  }

}
