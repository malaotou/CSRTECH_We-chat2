import { Moment } from 'moment/moment';
import { uuid } from 'uuid/v1'
import { UUID } from 'angular2-uuid'
let moment:Moment;
export class Message {
    Id:string;
    userName:string;
    userId:number;
    date:number;
    message:string;
    constructor(message:string,userid:number,username?:string){
        this.Id=UUID.UUID();
        this.userId=userid;
        this.date=Date.now(); ;
        this.message=message;
        this.userName=username;
    }
}
