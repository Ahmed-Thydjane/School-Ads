import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Cible } from './cible';
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
  emailres : string;
  telres : string;

  errorMessageType : string;
  errorMessageCible : string;
  errorMessageDuree : string;
  errorMessageDureeMin : string;
  errorMessageDureeMax : string;

  alertinscrit =  "C est bon ! vous êtes bien inscrit, nous vous redirigerons vers la page de login pour vous connecter ! ";

  constructor(private dialog : MatDialog,  private rooter : Router) { }

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
    console.log(this.type);
    console.log(this.cible);
    console.log(this.duree);
    console.log(this.duremin);
    console.log(this.duremax);
  }

  annuler(){
    this.rooter.navigateByUrl('/annonces');
  }

  openDialog(){
    this.dialog.open(this.Dialog);
  }
}
