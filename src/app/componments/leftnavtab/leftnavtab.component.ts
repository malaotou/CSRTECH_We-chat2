import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-leftnavtab',
  templateUrl: './leftnavtab.component.html',
  styleUrls: ['./leftnavtab.component.css']
})
export class LeftnavtabComponent implements OnInit {

  name=localStorage.getItem('uname');
  constructor() { }

  ngOnInit() {
  }

}
