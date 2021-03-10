import { Component, OnInit } from '@angular/core';
import { SignUp } from '../sign-up'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  userModel = new SignUp ("","");
  constructor() { }

  ngOnInit(): void {
  }

}
