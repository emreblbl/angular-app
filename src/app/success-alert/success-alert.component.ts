import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  // templateUrl: './success-alert.component.html',
  template :'<h3>Success Alert</h3>',
  styleUrls: ['./success-alert.component.css']
//   styles :[`p{
//     background: palegoldenrod;
//     padding : 20px;
//     border: 1px solid green;
// }`]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
