import { Component, OnInit } from '@angular/core';
import { Feedback } from '../feedback'

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  userModel = new Feedback ("","","");
  
  constructor() { }
  currentVal=""

  getVal(value:any){
    this.currentVal = value
  }
  ngOnInit(): void {
  }

}
