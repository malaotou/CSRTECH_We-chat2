import { Component,OnInit} from '@angular/core'
import { user } from '../../modules/user'
import { ApiServiceService } from '../../services/http/demo/api-service.service'
@Component({
    templateUrl:"login.component.html",
    styleUrls:["login.component.css"],
    selector:"app-login",
    providers:[ApiServiceService]
}) 

export class LoginComponment implements OnInit{
    constructor(private httpService:ApiServiceService){}
    ngOnInit(){
    }
    login(name:string,password:string){
        var u=new user();
        u.name=name;
        u.password=password;
        var login=this.httpService.login(u);
        
    }
}

