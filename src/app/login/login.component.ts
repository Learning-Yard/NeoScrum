import { Component, OnInit } from '@angular/core';
import { Login } from '../login'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // isLoggedIn:boolean = false;
  
  userModel = new Login ("","");
  constructor() { }
 
  ngOnInit(): void {
  }

}
