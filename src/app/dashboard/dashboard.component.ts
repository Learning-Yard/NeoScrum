import { Component, OnInit } from '@angular/core';
import dummy from '../../assets/data/dummy.json';
import { Login } from '../login'
import { HttpService } from '../http.service';
import  {LoginComponent} from '../login/login.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
public dummyList:{name:string,feedback:string,updated:number}[]=dummy;
feedbacks:any=[]
feedbacks1:any=[]
id:any; // To be replaced with UID
  activatedroute: any;
  // constructor(private httpservice:HttpService,private router:ActivatedRoute,private login_component:LoginComponent) {}
  constructor(private httpservice:HttpService,private router:ActivatedRoute) {}
  userModel = new Login ("","","");
  ngOnInit(){
    this.httpservice.getdata().subscribe((data)=>{
      console.log(data);
      this.feedbacks= data;
      this.feedbacks1 = this.feedbacks.filter((feedbacks: { userId: number; })=>feedbacks.userId==this.id);
      console.log(this.feedbacks1);
      // this.id=this.login_component.idchanger(this.id);
      console.log(this.router.snapshot.params);
      this.id=this.router.snapshot.params;
    })
    this.id=this.router.snapshot.params['id']
  }
  logout(){
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
  }
}

// function key(key: any, any: any): number {
//   throw new Error('Function not implemented.');
// }

