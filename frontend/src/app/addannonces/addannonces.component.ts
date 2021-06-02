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

  isChecked : boolean = false;
  zero : number = 0;
  un : number = 1;
  postuler : number;
  alert = "Votre annonce sera transmise à un administrateur pour une petite vérification du contenu, l'administrateur ne tardera pas à valider sinon elle sera supprimée au cas où l'administrateur n'approuve pas le contenu !";

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
  description : string;
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
  errorMessageTelRes : string;
  errorMessageEmailRes : string;
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
    this.errorMessageTelRes = '';
    this.errorMessageEmailRes = '';
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
     if(this.duremax == undefined){
       this.duremax = null
       if(this.type == 'collaboration'){
        this.errorMessageDureeMax = 'Vous êtes obligé de remplir le champ Durée minimale'
       }
     }
     if(this.duremin == undefined){
      this.duremin = null
      if(this.type == 'collaboration'){
        this.errorMessageDureeMin = 'Vous êtes obligé de remplir le champ Durée maximale'
       }
    }
    if(this.telRes == undefined){
      this.telRes = null
      this.postuler = 1;
      if(this.isChecked){
        this.errorMessageTelRes = 'Vous êtes obligé de remplir le champ le telephone du responsable';
      }
    }
    if(this.emailRes == undefined){
      this.emailRes = null
      this.postuler = 1;
      if(this.isChecked){
        this.errorMessageEmailRes = 'Vous êtes obligé de remplir le champ l email du responsable';
      }
    }
    if(this.fichier == undefined){
      this.fichier = null;
    }
      if(localStorage.getItem('idAdmin')!=''){
        console.log(this.postuler)
          this.message.sendMessage('/insertNewAnnonce', { 
            type : this.type, 
            titre : this.titre, 
            description : this.description, 
            cible : this.cible, 
            idUser : this.zero, 
            duree : this.duree,
            duree_max : this.duremax,
            duree_min : this.duremin, 
            tel_responsable : this.telRes, 
            email_responsable : this.emailRes,
            postuler : this.postuler,
            status : this.un,
            idAdmin : localStorage.getItem('idAdmin'),
            fichier : this.fichier
            }).subscribe(
                (data) => {
                    if(data){
                    console.log(data);
                    this.rooter.navigateByUrl('/annonces');
                }
                else{
                  console.log(data)
                }
               }
            );                
      }

      else if(localStorage.getItem('idUser')!=''){
        this.message.sendMessage('/insertNewAnnonce', { 
          type : this.type, 
          titre : this.titre, 
          description : this.description, 
          cible : this.cible, 
          idUser : localStorage.getItem('idUser'),
          duree : this.duree,
          duree_max : this.duremax,
          duree_min : this.duremin, 
          tel_responsable : this.telRes, 
          email_responsable : this.emailRes,
          postuler : this.postuler,
          status : this.zero,
          idAdmin : this.zero,
          fichier : this.fichier
          }).subscribe(
              (data) => {
                  if(data){
                  console.log(data);
                  this.openDialog();
              }
              else{
                console.log(data)
              }
             }
          );                
    }

  }

  annuler(){
    this.rooter.navigateByUrl('/annonces');
  }

  openDialog(){
    this.dialog.open(this.Dialog);
  }
}
