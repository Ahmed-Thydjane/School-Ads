import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessageService } from '../message/message.service';

@Component({
  selector: 'app-gestiontoutesannonces',
  templateUrl: './gestiontoutesannonces.component.html',
  styleUrls: ['./gestiontoutesannonces.component.scss']
})
export class GestiontoutesannoncesComponent implements OnInit {

  @ViewChild('dialog1') Dialog1 : TemplateRef<any>;
  @ViewChild('dialog2') Dialog2 : TemplateRef<any>;

  annonces:any = []; 

  titre : string;
  description : string;
  idAnnonce : number;

  constructor(private message : MessageService, private dialog : MatDialog, private rooter : Router) { }

  ngOnInit(): void {
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

  openDialog1(titre,description,idAnnonce){
    this.titre = titre;
    this.description = description;
    this.idAnnonce = idAnnonce;
    this.dialog.open(this.Dialog1)
  }

  openDialog2(){
    this.dialog.open(this.Dialog2);
  }

  supprimer(){
    this.message.sendMessage('/supprimerAnnonce', {idAnnonce : this.idAnnonce}).subscribe(
      (data)=>{
        if(data){
          console.log(data);
          this.rooter.navigateByUrl('/annonces');
        }
      }
    )
  }

}
