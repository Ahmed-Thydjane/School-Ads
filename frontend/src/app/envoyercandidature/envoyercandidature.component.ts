import { Component, OnInit } from '@angular/core';
import { AnnoncesComponent } from '../annonces/annonces.component';
import { MessageService } from '../message/message.service';

@Component({
  selector: 'app-envoyercandidature',
  templateUrl: './envoyercandidature.component.html',
  styleUrls: ['./envoyercandidature.component.scss']
})
export class EnvoyercandidatureComponent implements OnInit {
  from : string;
  titre : string;
  constructor(private message : MessageService) { }

  ngOnInit(): void {
    if(localStorage.getItem('idAdmin')!=''){
        this.message.sendMessage('/getIdGlob', localStorage.getItem('idAdmin')).subscribe(
          (data)=>{
            if(data){
              console.log(data.data.email);
              console.log(data.data.nom);
              console.log(data.data.prenom);
              this.from = data.data.email;
              this.message.sendMessage('/getAnnonceById', {idAnnonce : localStorage.getItem('idAnnonce')}).subscribe(
                (data1)=>{
                  if(data1){
                    console.log(data1);
                    this.titre = data1.data.titre;
                  }
                }
              );
            }
          }
        );
    }

    else if(localStorage.getItem('idUser')!=''){
        this.message.sendMessage('/getIdGlob', localStorage.getItem('idUser')).subscribe(
          (data)=>{
            if(data){
              console.log(data.data.email);
              console.log(data.data.nom);
              console.log(data.data.prenom);
              this.from = data.data.email;
              this.message.sendMessage('/getAnnonceById', {idAnnonce : localStorage.getItem('idAnnonce')}).subscribe(
                (data1)=>{
                  if(data1){
                    console.log(data1);
                    this.titre = data1.data.titre;
                  }
                }
              );
            }
          }
        );  
    }
  }

}
