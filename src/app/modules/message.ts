export class Message {
    Id:number;
    userId:number;
    date:string;
    message:string;
    constructor(id:number,userid:number,date:string,message:string){
        this.Id=id;
        this.userId=userid;
        this.date=date;
        this.message=message;
    }
}
