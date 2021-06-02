import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnnoncesComponent } from '../annonces/annonces.component';
import { AuthService } from '../message/auth/auth.service';
import { MessageService } from '../message/message.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private auth : AuthService, private router : Router, private message : MessageService) { }

  ngOnInit(): void {
  }
  
  isAdmin(){
    return this.auth.isAdmin();
  }

  isLoggedIn(){
    return this.auth.isLoggedin();
  }

  isLoggedOut(){
    this.auth.dontShowMenu();
    if(localStorage.getItem('idUser')!=''){
      this.auth.logOut(localStorage.getItem('idUser'));
    }
    else if(localStorage.getItem('idAdmin')!=''){
      this.auth.logOut(localStorage.getItem('idAdmin'));
    }
    this.router.navigateByUrl('/login');
  }

  notifications(){
    return localStorage.getItem('notif');
  }
}