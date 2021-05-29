import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageService } from '../message/message.service';

@Component({
  selector: 'app-mesannonces',
  templateUrl: './mesannonces.component.html',
  styleUrls: ['./mesannonces.component.scss']
})
export class MesannoncesComponent implements OnInit {
  @ViewChild('dialog') Dialog : TemplateRef<any>;

  annonces:any = [];

  titre : string;
  description : string;

  constructor(private message : MessageService, private dialog : MatDialog) { }

  ngOnInit(): void {
    if(localStorage.getItem('idAdmin')!=null){
      this.message.sendMessage('/getAnnonceAdmin',localStorage.getItem('idAdmin')).subscribe(
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
    if(localStorage.getItem('idUser')!=null){
      this.message.sendMessage('/getAnnonceUser',localStorage.getItem('idUser')).subscribe(
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
