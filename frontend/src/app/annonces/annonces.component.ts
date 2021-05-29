import { Component, OnInit, ViewChild,TemplateRef } from '@angular/core';
import { Cible } from '../addannonces/Cible';
import { Type } from '../addannonces/Type';
import { MessageService } from '../message/message.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.scss']
})
export class AnnoncesComponent implements OnInit {
  @ViewChild('dialog') Dialog : TemplateRef<any>;
 
  
  annonces:any = []; 

  type : string;
  types : Type[];

  cible : string; 
  cibles : Cible[];

  titre : string;
  description : string;

  constructor(private message : MessageService, private dialog : MatDialog) {
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

    openDialog(titre,description){
      this.titre = titre;
      this.description = description;
      this.dialog.open(this.Dialog);
    }

}
