export class Chatgroup {
    Id:number;
    name:string;
    image:string;
    lastMessage:string;
    lastAcriviteDate:string;
    constructor(name:string,
                image:string,
                lastMessage:string,
                lastAcriviteDate:string){
    this.name=name;
    this.image=image;
    this.lastMessage=lastMessage;
    this.lastAcriviteDate=lastAcriviteDate;
    }
}
