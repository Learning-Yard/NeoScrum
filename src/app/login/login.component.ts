import { Component, OnInit } from '@angular/core';
import { RouterModule , Router } from '@angular/router';
import { Feedback } from '../feedback';
import { Login } from '../login'
import { AuthcheckerService } from './../authchecker.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // isLoggedIn:boolean = false;
id=1;
msg="";
  userModel = new Login ("","","");
  public name:any;
  constructor(private service:AuthcheckerService , private routes: Router) { }
 
  ngOnInit(): void {
  }
// idchanger(name:any){
//   if (name=="abc"){
//     return this.id = 1;
//   }else{
//     return this.id = 2;
//   }

// }
login(name: string, email:string , password : string)
{
  var output = this.service.checkcredentials(name, password,email);
  if(output == true)
  {
    this.id=2;
    this.routes.navigate(['/dashboard/'+this.id]);
  }
  else{
this.msg ='Invalid username or password or email';
alert(this.msg);
  }
}
}
