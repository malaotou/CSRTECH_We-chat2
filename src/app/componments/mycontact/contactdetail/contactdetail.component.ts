import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Route,Router } from '@angular/router'
import { Companys } from '../../../demoData/companys'

@Component({
  selector: 'app-contactdetail',
  templateUrl: './contactdetail.component.html',
  styleUrls: ['./contactdetail.component.css']
})
export class ContactdetailComponent implements OnInit {
  @Input() company: any;
  companyInfo;
  constructor(private router:Router) {

  }

  ngOnInit() {

  }
  ngOnChanges() {
    this.companyInfo =this.company;
  }
  chat(id){
    this.router.navigate(['/mychat'],{ queryParams: { id:id}});
  }

}
