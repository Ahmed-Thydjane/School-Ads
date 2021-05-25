import { Injectable } from '@angular/core';
import {MessageService, PhpData} from "../message.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn : boolean;
  role: string;
  admin : boolean;

  constructor(private messageService : MessageService) { }

  

  sendAuthentication(url:string, email : string, password : string) : Observable<PhpData>{

    return this.messageService.sendMessage(url, {email : email , password : password });
  }

  finalizeAuthentication(serverResponse : PhpData){
    if(serverResponse.status == 'error') {
      this.isLoggedIn = false;
    }
    else if (serverResponse.status === 'ok'){
      if (serverResponse.data[1] === 'administrateur') {
        this.isLoggedIn = true;
        this.admin = true;
      }
      else if(serverResponse.data[1] === 'utilisateur' ) {
        this.isLoggedIn = true;
        this.admin = false;
      }
    }
  }

  isAdmin(){
    return this.admin;
  }

  isLoggedin(){
    return this.isLoggedIn;
  }
  
  dontShowMenu(){
    this.admin = false;
    this.isLoggedIn = false;
    return (this.admin, this.isLoggedIn);
  }

  getUserById(id){
    return this.messageService.sendMessage('/getIdGlob', id);
  }

  logOut(id){
    return this.messageService.sendMessage('/logOut', id).subscribe(
      (result)=>{
        //console.log(result);
      }
    );
  }

  getEmail(id){
     return this.messageService.sendMessage('/getEmail', id).subscribe(
       (result)=>{
         console.log(result);
       }
     );
  }
}
