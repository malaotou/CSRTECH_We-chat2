import {Component,OnInit} from '@angular/core'
import { Router } from '@angular/router'
@Component({
    templateUrl:'logout.componment.html',
    styleUrls:['logout.componment.css'],
    selector:'app-logout'
})
export class LogoutComponent implements OnInit{
    constructor(private router:Router){
    }
    ngOnInit(){

    }
    logout(){
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }
}
