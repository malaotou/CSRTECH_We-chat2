import { Component, OnInit } from '@angular/core';
import { Companys } from "../../demoData/companys"
@Component({
  selector: 'app-mycontact',
  templateUrl: './mycontact.component.html',
  styleUrls: ['./mycontact.component.css']
})
export class MycontactComponent implements OnInit {
  companys:Array<any>;
  currentitem:any;
  isActive:boolean;
  constructor() { }

  ngOnInit() {
    this.companys=Companys;
  }
  getCompanyDetail(id:string){
    console.log(id);
    this.currentitem=Companys.filter(item=>{return item.id===id});
    console.log(this.currentitem);
  }
  search(value:any){
    if(value!=''){
      this.companys=Companys.filter(item=>{return item.id===value});
      this.currentitem=Companys.filter(item=>{return item.id===value});
    }
    else{
      this.companys=Companys;
    }
    
  }
}
