import { Injectable } from '@angular/core';
import { AuthHttp,JwtHelper } from 'angular2-jwt';
import { Http,Response} from '@angular/http'
import { user} from '../../../modules/user'
import 'rxjs/Rx';
@Injectable()
export class ApiServiceService {
  
  baseurl="http://192.168.10.136:3000/";
  jwtHelper:JwtHelper=new JwtHelper();
  constructor(public authHttp:AuthHttp,public http:Http) { }
  thing:any;
  getData(){
    //return this.authHttp.get('http://192.168.10.40:3000/api');
    return this.authHttp.get(this.baseurl+'api/user')
    .map((data:Response)=>{ 
        let token= data.json() && data.json().id
        if(token){
          return data.json();
        }
    });                   
                         
  }
  login(u:user)  {
    return this.authHttp.post(this.baseurl+"api/user/login",u)
    .map((data:Response)=>{
      console.log('login===========')
      console.log(data.json().token)
      localStorage.setItem('token',data.json().token);
      var expired=this.jwtHelper.isTokenExpired(data.json().token)
      console.log(this.jwtHelper.getTokenExpirationDate(data.json().token));
      //return data.json().token;
    }).subscribe(message=>{return message});   
  }
  register(){
    return this.authHttp.post(this.baseurl+'api/user/register',{'fdsa':''})
            .map(res=>  res.json())
            .subscribe(data=>console.log(data));
  }
}
