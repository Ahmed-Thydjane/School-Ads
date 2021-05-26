import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../message/auth/auth.service';
import { MessageService, PhpData } from '../message/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email : string;
  password : string;
  messageError : any;

    constructor(private authService : AuthService, private rooter : Router) {
    }

    ngOnInit(): void {
    }

    afficher1() {
      this.authService.sendAuthentication('/checkLogin', this.email, this.password)
      .subscribe((data) =>
            {
              this.authService.finalizeAuthentication(data);
              if(!this.authService.isLoggedIn) {this.messageError = "Erreur au niveau du mot de passe/email !"}
              else {
              if(this.authService.isAdmin()){
                localStorage.setItem('idAdmin', data.data[0]);
                console.log(data.data[0]);
                //console.log(localStorage.getItem('idAdmin'));
              }
              else{
                localStorage.setItem('idUser', data.data[0]);
                console.log(data.data[0]);
                //console.log(localStorage.getItem('idUser'));
              }
              this.messageError = "";
              this.rooter.navigateByUrl('/annonces');
      }});
    }

    afficher2(){
      this.rooter.navigateByUrl('/signin');
    }
}
