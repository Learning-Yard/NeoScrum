import { Component, OnInit } from '@angular/core';
import { Feedback } from '../feedback';
import { Login } from '../login'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // isLoggedIn:boolean = false;
id=1;
  userModel = new Login ("","","");
  public name:any;
  constructor() { }
 
  ngOnInit(): void {
  }
// idchanger(name:any){
//   if (name=="abc"){
//     return this.id = 1;
//   }else{
//     return this.id = 2;
//   }

// }
}
