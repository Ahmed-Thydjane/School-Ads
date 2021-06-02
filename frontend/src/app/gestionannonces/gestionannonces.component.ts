import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessageService } from '../message/message.service';

@Component({
  selector: 'app-gestionannonces',
  templateUrl: './gestionannonces.component.html',
  styleUrls: ['./gestionannonces.component.scss']
})
export class GestionannoncesComponent implements OnInit {
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
                        if(element.idUser!=0){
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
    this.dialog.open(this.Dialog1);
}
openDialog2(){
  this.dialog.open(this.Dialog2);
}
valider(){
  this.message.sendMessage('/validerAnnonce', {idAnnonce : this.idAnnonce}).subscribe(
    (data)=>{
      if(data){
        console.log(data);
        this.rooter.navigateByUrl('/annonces');
      }
    }
  );

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
