import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: '<p>success-alert works!</p>',
  //styleUrls: ['./success-alert.component.css']
  styles: [ 
    `p {color: green;}`
  ]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
