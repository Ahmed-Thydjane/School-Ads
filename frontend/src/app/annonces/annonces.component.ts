import { Component, OnInit, ViewChild,TemplateRef } from '@angular/core';
import { Cible } from '../addannonces/Cible';
import { Type } from '../addannonces/Type';
import { MessageService } from '../message/message.service';
import {MatDialog} from '@angular/material/dialog';
import { AuthService } from '../message/auth/auth.service';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.scss']
})
export class AnnoncesComponent implements OnInit {
  @ViewChild('dialog1') Dialog1 : TemplateRef<any>;

  annonces:any = []; 

  compteur : number = 0;
  
  postuler : number;
  postulercheck : boolean = false;

  type : string;
  types : Type[];

  cible : string; 
  cibles : Cible[];

  titre : string;
  description : string;
  idAnnonce : number;

  idPosteur : number;
  emailposteur : string;
  emailtestposteur : string;
  constructor(private message : MessageService, private dialog : MatDialog, private auth : AuthService) {
   }

  ngOnInit(): void {
    this.types = [{name:"stage"},{name:"alternance"},{name:"collocation"}];
    this.cibles = [{name:"tout le monde "}, {name:"3A"}, {name:"4A"}, {name:"5A"}];
    this.annonces = [];
      this.message.sendMessage('/getAllAnnonce', null).subscribe(
        (data)=>{
          if(data){
                this.message.sendMessage('/userAnnonce', null).subscribe(
                  (res)=>{
                    data.data.forEach(element => {
                      if(element.status == 0){
                        this.compteur = this.compteur +1;
                      }
                      if(element.idAdmin!=0){
                        for(let i of res.data[0]){
                          if(element.idAdmin==i.idAdmin){
                            element.field = i;
                          }
                        }
                      }
                      else if(element.idUser!=0){
                        for(let i of res.data[1]){
                          if(element.idUser==i.idUser){
                            element.field = i;
                          }
                        }
                      }
                      this.annonces.push(element);
                    });
                    localStorage.setItem('notif','' + this.compteur);
                }
              );
            }

          }
      );
      if(localStorage.getItem('idUser')!=''){
        this.message.sendMessage('/getIdGlob', localStorage.getItem('idUser')).subscribe(
            (data)=>{
              this.emailposteur = data.data.email;
            }
          )
      }
      else if(localStorage.getItem('idAdmin')!=''){
        this.message.sendMessage('/getIdGlob', localStorage.getItem('idAdmin')).subscribe(
            (data)=>{
              this.emailposteur = data.data.email;
            }
          )
      }
    }
    
  onSelectedType(val:string){this.type = val;}
  onSelectedCible(val:string){this.cible = val;}

    rechercher(){
      this.annonces = [];
      if(this.type == null && this.cible == null){
        this.ngOnInit();
      }
      else{
        this.message.sendMessage('/getAllAnnonceTypeCible',  {type : this.type, cible : this.cible}).subscribe(
          (data)=>{
            if(data){
                  this.message.sendMessage('/userAnnonce', null).subscribe(
                    (res)=>{
                      data.data.forEach(element => {
                        if(element.idAdmin!=0){
                          for(let i of res.data[0]){
                            if(element.idAdmin==i.idAdmin){
                              element.field = i;
                            }
                          }
                        }
                        else if(element.idUser!=0){
                          for(let i of res.data[1]){
                            if(element.idUser==i.idUser){
                              element.field = i;
                            }
                          }
                        }
                        this.annonces.push(element);
                      });
                  }
                );
              }
          }
        );
      }
    }

    openDialog1(email,titre,description,postuler,idAnnonce){
        this.emailtestposteur = email;
        this.postuler = postuler;
      
          if(this.postuler == 1 && this.emailtestposteur == this.emailposteur ){
            this.postulercheck = false;
          }
          else if(this.postuler == 1 && this.emailtestposteur != this.emailposteur){
            this.postulercheck = true;
          }
          else if(this.postuler == 0){
            this.postulercheck = false;
          }
        
        this.titre = titre;
        this.description = description;
        this.idAnnonce = idAnnonce;
        localStorage.setItem('idAnnonce',''+this.idAnnonce);
        this.dialog.open(this.Dialog1);
        
    }






}
