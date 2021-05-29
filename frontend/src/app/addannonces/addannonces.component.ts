import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessageService } from '../message/message.service';
import { Cible } from './Cible';
import { Duree } from './Duree';
import { Dureemax } from './Dureemax';
import { Dureemin } from './Dureemin';
import { Type } from './Type';

@Component({
  selector: 'app-addannonces',
  templateUrl: './addannonces.component.html',
  styleUrls: ['./addannonces.component.scss']
})
export class AddannoncesComponent implements OnInit {
  @ViewChild('dialog') Dialog : TemplateRef<any>;

  isChecked : boolean = true;

  type : string;
  types : Type[];

  cible : string; 
  cibles : Cible[];

  duree : string;
  durees : Duree[];

  duremin : string;
  duremins : Dureemin[];

  duremax : string;
  duremaxs : Dureemax[];

  titre : string;
  desciption : string;
  fichier : string;
  idUser : number;
  vue : number;
  candidature : number;
  emailRes : string;
  telRes : string;

  errorMessageTitre : string;
  errorMessageType : string;
  errorMessageCible : string;
  errorMessageDuree : string;
  errorMessageDureeMin : string;
  errorMessageDureeMax : string;

  alertinscrit =  "C est bon ! vous êtes bien inscrit, nous vous redirigerons vers la page de login pour vous connecter ! ";

  constructor(private message : MessageService, private dialog : MatDialog,  private rooter : Router) { }

  ngOnInit(): void {
    this.types = [{name:"stage"},{name:"alternance"},{name:"collocation"}];

    this.cibles = [{name:"tout le monde "}, {name:"3A"}, {name:"4A"}, {name:"5A"}];

    this.durees = [{name:"2 semaines"}, {name:"4 semaines"},{name:"6 semaines"},{name:"8 semaines"},{name:"3 mois"},{name:"4 mois"}];
    
    this.duremins =[{name:"2 semaines"}, {name:"4 semaines"}, {name:"6 semaines"}, {name:"8 semaines"},{name:"10 semaines"}, {name:"3 mois"}, {name:"4 mois"},
    {name:"6 mois"}, {name:"6 mois et plus"}, {name:"1 ans"}, {name:"1 ans et plus"} ];

    this.duremaxs = [{name:"2 semaines"}, {name:"4 semaines"}, {name:"6 semaines"}, {name:"8 semaines"},{name:"10 semaines"}, {name:"3 mois"}, {name:"4 mois"},
      {name:"6 mois"}, {name:"6 mois et plus"}, {name:"1 ans"}, {name:"1 ans et plus"} ];
  }

  onSelectedType(val:string){this.type = val;}
  onSelectedCible(val:string){this.cible = val;}
  onSelectedDuree(val:string){this.duree = val;}
  onSelectedDureeMin(val:string){this.duremin = val;}
  onSelectedDureeMax(val:string){this.duremax = val;}

  valider(){
    this.errorMessageTitre = '';
    this.errorMessageType = '';
    this.errorMessageCible = '';
    this.errorMessageDuree ='';
    this.errorMessageDureeMin = '';
    this.errorMessageDureeMax = '';
    if(this.titre == ''){
      this.errorMessageTitre = "Vous êtes obligé de remplir le champ Titre ! ";
    }
    if(this.cible == null){
       this.errorMessageCible = "Vous êtes obligé de remplir le champ Cible ! ";
    }
    if(this.type == null){
      this.errorMessageType = "Vous êtes obligé de remplir le champ Type ! ";
     }
    if(this.duree == null){
      this.errorMessageDuree = "Vous êtes obligé de remplir le champ Duree ! ";
     }
     else{
      if(localStorage.getItem('idAdmin')!=''){
        //this.message.sendMessage()
      }
     }
    
  }

  annuler(){
    this.rooter.navigateByUrl('/annonces');
  }

  openDialog(){
    this.dialog.open(this.Dialog);
  }
}
