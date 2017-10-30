import { Component,OnInit } from '@angular/core'

@Component({
    selector:'my-info',
    templateUrl:'myinfo.component.html',
    styleUrls:['myinfo.component.css']
    
})
export class MyinfoComponment implements OnInit{
    avator:string;
    constructor(){

    }
    ngOnInit(){
        this.avator='../../assets/images/myhead.png'
    }
}