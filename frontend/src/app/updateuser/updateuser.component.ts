import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../message/auth/auth.service';
import { Profil } from '../signin/Profil';


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
  passwordco : string;
  profil:string; 

  errorMessageNom : string;
  errorMessagePrenom : string;
  errorMessageEmail : string;
  errorMessagePassword : string;
  errorMessagePasswordCo : string;
  
  constructor(private auth : AuthService, private rooter : Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('idUser') != ''){
      this.auth.getUserById(localStorage.getItem('idUser')).subscribe(
        (result)=>{
          console.log(result.data);
          this.nom = result.data.nom;
          this.prenom = result.data.prenom;
          this.email = result.data.email;
          this.password = result.data.password;
          this.passwordco = result.data.password;
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
          this.passwordco = result.data.password;
          this.profil = result.data.profil;
        }
      );
    }
  }

  cancel(){
    this.rooter.navigateByUrl('/annonces');
  }


  
}
