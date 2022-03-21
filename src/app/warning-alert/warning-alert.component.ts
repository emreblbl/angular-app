import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  // templateUrl: './warning-alert.component.html',
  template:'<h3>Warning Alert</h3>',
  styleUrls: ['./warning-alert.component.css']
  // styles:[`p{
  //   background: mistyrose;
  //   border: 1px solid red;
  //   padding: 20px;
  // }`]
})

export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
