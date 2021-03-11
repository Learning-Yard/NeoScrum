import { Component, OnInit } from '@angular/core';
import dummy from '../../assets/data/dummy.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
public dummyList:{name:string,feedback:string,updated:number}[]=dummy;
  constructor() { }

  ngOnInit(): void {
  }

}
