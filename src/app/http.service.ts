import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
get:any;
  private _http1: any;
  public get http1(): any {
    return this._http1;
  }
  public set http1(value: any) {
    this._http1 = value;
  }
public feedbacks:{userId:number,id:number,title:string,body:string}[]=this.http1;
  constructor(private httpservices:HttpClient) { }
  public getdata(){
    return this.httpservices.get('https://jsonplaceholder.typicode.com/posts');
  }
}
