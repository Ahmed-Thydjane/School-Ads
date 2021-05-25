import { Component, OnInit } from '@angular/core';

export interface Annonce{
  type:string;
  titre: string;
  description:string;
  cible:string;
  fichier:string;
  duree:string;
  vue:number;
  candidature:number;
  duree_max: string;
  duree_min: string;
  tel_responsable: string;
  email_responsable: string;
  postuler: boolean;
  status:number;

}

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.scss']
})
export class AnnoncesComponent implements OnInit {
  // @ts-ignore
  // @ts-ignore
  datasource :Annonce[]=[{candidature : 1},{candidature :2}, {candidature :3}, {candidature :5}];


  constructor() { }

  ngOnInit(): void {
  }

}
