import {Component,OnInit} from '@angular/core'

@Component({
    templateUrl:'logout.componment.html',
    styleUrls:['logout.componment.css'],
    selector:'app-logout'
})
export class LogoutComponent implements OnInit{
    constructor(){
    }
    ngOnInit(){

    }
    logout(){
        localStorage.removeItem('token');
    }
}
