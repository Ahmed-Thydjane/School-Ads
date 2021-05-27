import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../message/message.service';
import {MatDialog} from '@angular/material/dialog';
import { Profil } from './Profil';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  @ViewChild('dialog') Dialog : TemplateRef<any>;

  nom : string = "";
  prenom : string = "";
  email : string = "";
  password : string = "";
  passwordco : string = "";
  profils:Profil[];
  profil:string; 
  alertinscrit =  "C est bon ! vous êtes bien inscrit, nous vous redirigerons vers la page de login pour vous connecter ! ";
  
  errorMessageNom : string;
  errorMessagePrenom : string;
  errorMessageEmail : string;
  errorMessagePassword : string;
  errorMessagePasswordCo : string;
  errorMessageProfil : string;

  constructor(private message : MessageService, private rooter : Router, private dialog : MatDialog) { }

  ngOnInit(): void {
    this.profils = [
      {name:"etudiant"},
      {name:"professeur"},
    ]
  }

  onSelectedProfil(val:string){
    this.profil = val;
  }

  inscrire(){
    this.errorMessageNom = '';
    this.errorMessagePrenom ='';
    this.errorMessageEmail ='';
    this.errorMessagePassword ='';
    this.errorMessagePasswordCo ='';
    this.errorMessageProfil ='';
    if(this.nom == ''){
      this.errorMessageNom = "Vous êtes obligé de remplir le champ Nom ! ";
    }
    if(this.prenom == ''){
       this.errorMessagePrenom = "Vous êtes obligé de remplir le champ Prenom ! ";
    }
    if(this.email == ''){
      this.errorMessageEmail = "Vous êtes obligé de remplir le champ Email ! ";
     }
    if(this.password == ''){
      this.errorMessagePassword = "Vous êtes obligé de remplir le champ Password ! ";
     }
      if(this.passwordco == ''){
       this.errorMessagePasswordCo = "Vous êtes obligé de remplir le champ Confirmation du password ! ";
      }else{
        if(this.passwordco != this.password){
         this.errorMessagePasswordCo = "Le champs confirmation du password doit obligatroiment être identique au champ Paassword ! ";
        }
      }
     if(this.profil == null){
      this.errorMessageProfil = "Vous êtes obligé de selectionner votre profil ! ";
    }
    else{
      if(this.nom != '' && this.prenom != '' && this.email != '' && this.password != '' && this.passwordco == this.password && this.profil != null){
        this.message.sendMessage('/inscription', {nom : this.nom, prenom : this.prenom, email : this.email, password : this.password, profil : this.profil}).subscribe(
          (result)=>{
            if(result.status == 'ok'){
              this.openDialog();
              this.rooter.navigateByUrl('/login');
            }
            else if(result.status == 'error'){
              console.log(result.status);
              alert(result.status + 'Cet utilisateur existe déjà !');
            }
          }
        );
      }
    }
    }

    annuler(){
      this.rooter.navigateByUrl('/login');
    }

    openDialog(){
      this.dialog.open(this.Dialog);
    }
    }
          
        
      
    
    
    
  

