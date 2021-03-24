import { Component, OnInit } from '@angular/core';
import { Feedback } from '../feedback';
import feedBackDummy from '../../assets/data/dummy.json';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  userModel = new Feedback ("","","");
  public feedBackList:{name:string,feedback:string,updated:number}[]=feedBackDummy;
  constructor() { }
  currentVal=""

  getVal(value:any){
    this.currentVal = value
  }
  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
  }
}
