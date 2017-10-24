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
    //console.log('localstorage')
    //console.log(JSON.stringify(user));
    // if(user){
      //this.login();
    // }
    //this.getApiMessages();
    //this.register();
    console.log("check login status");
    this.authenticate.isAuthenticated();
   }
   
  ngOnInit() {
    this.connection=this.ioService.getMessage().subscribe(message=>{
      this.messages.push(message);
      console.log(message);
      
    });
   
  }
  sendMessage(val:string){
    console.log('client click '+val)
    this.ioService.sendMessage(val,localStorage.getItem('token'));
    this.message = '';
  }
  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  getApiMessages(){
    console.log('fdsa')
    console.log(this.httpService.getData().subscribe(data=>{
      this.apimessae=data;
    }));
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
