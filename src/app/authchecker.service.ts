import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthcheckerService {

  constructor() { }
  checkcredentials(name: string, password : string,email:string)
  {
if(name == "abc" && password =="a1234b12" && email=="abc@gmail.com"){
localStorage.setItem('name',"abc");
localStorage.setItem('password',"a1234b12");
localStorage.setItem('email',"abc@gmail.com");
console.log("Authenticated");
return true;
}
else{
  return false;
}
  }
}
