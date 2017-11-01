import { Component, OnInit } from '@angular/core';
import { Companys } from "../../demoData/companys"
@Component({
  selector: 'app-mycontact',
  templateUrl: './mycontact.component.html',
  styleUrls: ['./mycontact.component.css']
})
export class MycontactComponent implements OnInit {
  companys:any;
  currentitem:any;
  isActive:boolean;
  constructor() { }

  ngOnInit() {
    this.companys=Companys;
  }
  getCompanyDetail(id:string){
    this.currentitem=Companys.filter(item=>{return item.id===id});
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
