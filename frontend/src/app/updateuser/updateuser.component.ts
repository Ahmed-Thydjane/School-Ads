import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../message/auth/auth.service';
import { MessageService } from '../message/message.service';


@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.scss']
})
export class UpdateuserComponent implements OnInit {
  nom : string;
  prenom : string;
  email : string;
  password : string;
  //passwordco : string;
  profil:string; 

  errorMessageNom : string;
  errorMessagePrenom : string;
  errorMessageEmail : string;
  errorMessagePassword : string;
  //errorMessagePasswordCo : string;
  
  constructor(private auth : AuthService, private rooter : Router, private message : MessageService) { }

  ngOnInit(): void {
    if(localStorage.getItem('idUser') != ''){
      this.auth.getUserById(localStorage.getItem('idUser')).subscribe(
        (result)=>{
          console.log(result.data);
          this.nom = result.data.nom;
          this.prenom = result.data.prenom;
          this.email = result.data.email;
          this.password = result.data.password;
          //this.passwordco = result.data.password;
          this.profil = result.data.profil;
        }
      );
    }
    else if(localStorage.getItem('idAdmin') != ''){
      this.auth.getUserById(localStorage.getItem('idAdmin')).subscribe(
        (result)=>{
          console.log(result.data);
          this.nom = result.data.nom;
          this.prenom = result.data.prenom;
          this.email = result.data.email;
          this.password = result.data.password;
          //this.passwordco = result.data.password;
          this.profil = result.data.profil;
          
        }
      );
    }
  }

  validate(){
    console.log(localStorage.getItem('idUser'))
    console.log(localStorage.getItem('idAdmin')) 
    if(localStorage.getItem('idUser') != ''){
    this.message.sendMessage('/getModifyProfil', {nom : this.nom, prenom : this.prenom, email : this.email, password : this.password, idUser : localStorage.getItem('idUser')}).subscribe();
    }
    else if(localStorage.getItem('idAdmin') != ''){
      this.message.sendMessage('/getModifyProfil', {nom : this.nom, prenom : this.prenom, email : this.email, password : this.password, idAdmin : localStorage.getItem('idAdmin')}).subscribe();
    }
  }

  cancel(){
    this.rooter.navigateByUrl('/annonces');
  }


  
}
