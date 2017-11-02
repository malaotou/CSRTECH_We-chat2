import {Injectable} from '@angular/core'
import { AuthHttp,JwtHelper } from 'angular2-jwt';
import { Router,CanActivate} from '@angular/router'
@Injectable()
export class AuthenticateService{
        constructor(private router:Router){
    }
    public isAuthenticated():boolean{
        let rtn=false
        var token=localStorage.getItem('token')
        if(token!=undefined){
                //check token
            var jwtHelper= new JwtHelper();
            var decodeToken= jwtHelper.decodeToken(token);
            var expireDate = jwtHelper.getTokenExpirationDate(token);
            console.log("decodeToken");
            console.log(expireDate);
            // 检测Token 是否过期
            if(!jwtHelper.isTokenExpired(token))
            {                      
                rtn=true;
            }
            {
                console.log('redirect')
            }
        }
        else{
            console.log('not login no token')
            //this.router.navigate(['/login']);
        }
        return rtn;       
    }
}