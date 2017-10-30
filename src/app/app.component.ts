import { Component } from '@angular/core';
import { Overlay } from 'ngx-modialog';
//import { Modal } from 'ngx-modialog/plugins/bootstrap';
import {Subject,Observable,BehaviorSubject} from 'rxjs'
import { AuthenticateService } from './services/authenticate.server'

import { Router } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuthened:boolean;
  title = 'app';
  text1:BehaviorSubject<string> =new BehaviorSubject<string>("");
  text2:BehaviorSubject<string> =new BehaviorSubject<string>("");
  constructor(auth:AuthenticateService,private router:Router){
    //this.text1.debounceTime(1000).subscribe(value=>console.log(value));
    this.isAuthened=auth.isAuthenticated();
    // console.log(this.isAuthened);
    // console.log("==========")
    this.text1.bufferCount(10)
    .subscribe(v=>console.log(v));
     
  }

  // onClick(){
  //   this.modal.alert()
  //   .size('lg')
  //   .showClose(false)
  //   .isBlocking(true)
  //   .title('A simple Alert style modal window')
  //   .body(`
  //       <h4>Alert is a classic (title/body/footer) 1 button modal window that 
  //       does not block.</h4>
  //       <b>Configuration:</b>
  //       <ul>
  //           <li>Non blocking (click anywhere outside to dismiss)</li>
  //           <li>Size large</li>
  //           <li>Dismissed with default keyboard key (ESC)</li>
  //           <li>Close wth button click</li>
  //           <li>HTML content</li>
  //       </ul>`)
  //   .open();
  // }
}
