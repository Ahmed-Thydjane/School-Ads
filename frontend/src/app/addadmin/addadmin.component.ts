import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../message/auth/auth.service';
import { MessageService } from '../message/message.service';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.scss']
})

export class AddadminComponent implements OnInit {
  @ViewChild('dialog1') Dialog1 : TemplateRef<any>;
  @ViewChild('dialog2') Dialog2 : TemplateRef<any>;

  nomA : string = '';
  prenomA : string = '';
  emailA : string = '';
  passwordA : string = '';
  passwordcoA : string = '';
  profilA: string = ''; 
  alertinscrit1 =  "C est bon ! l'administrateur a été bien ajouté ! ";
  alertinscrit2 =  "Erreur ! cet email existe déjà ! ";

  errorMessageNomA : string;
  errorMessagePrenomA : string;
  errorMessageEmailA : string;
  errorMessagePasswordA : string;
  errorMessagePasswordCoA : string;

  constructor(private message : MessageService, private rooter : Router, private dialog : MatDialog) { }

  ngOnInit(): void {
    this.profilA = 'administrateur';
  }

  ajouter(){
    
    this.errorMessageNomA = '';
    this.errorMessagePrenomA ='';
    this.errorMessageEmailA ='';
    this.errorMessagePasswordA ='';
    this.errorMessagePasswordCoA ='';
    if(this.nomA == ''){
      this.errorMessageNomA = "Vous êtes obligé de remplir le champ Nom ! ";
    }
    if(this.prenomA == ''){
       this.errorMessagePrenomA = "Vous êtes obligé de remplir le champ Prenom ! ";
    }
    if(this.emailA == ''){
      this.errorMessageEmailA = "Vous êtes obligé de remplir le champ Email ! ";
     }
    if(this.passwordA == ''){
      this.errorMessagePasswordA = "Vous êtes obligé de remplir le champ Password ! ";
     }
      if(this.passwordcoA == ''){
       this.errorMessagePasswordCoA = "Vous êtes obligé de remplir le champ Confirmation du password ! ";
      }else{
        if(this.passwordcoA != this.passwordA){
         this.errorMessagePasswordCoA = "Le champs confirmation du password doit obligatroiment être identique au champ Paassword ! ";
        }
    else{
        if(this.nomA != '' && this.prenomA != '' && this.emailA != '' && this.passwordA != '' && this.passwordcoA == this.passwordA){
          this.message.sendMessage('/adminInsert', {nom : this.nomA, prenom : this.prenomA, email : this.emailA, password : this.passwordA, profil : this.profilA}).subscribe(
            (result)=>{
              console.log(result)
              if(result){
                this.openDialog1();
                this.rooter.navigateByUrl('/annonces');
              }
              else{
                this.openDialog2();
                this.emailA = '';
                this.errorMessageEmailA = "Veuillez changer le champ Email ! ";
              }
            }
          );
        }
      }
    }   
    }
  
  annuler(){
    this.rooter.navigateByUrl('/annonces');
  }


  openDialog1(){
    this.dialog.open(this.Dialog1);
  }

  openDialog2(){
    this.dialog.open(this.Dialog2);
  }
}
