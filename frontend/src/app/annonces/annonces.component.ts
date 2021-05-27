import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message/message.service';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.scss']
})
export class AnnoncesComponent implements OnInit {
  annonces:any = []; 

  constructor(private message : MessageService) { }

  ngOnInit(): void {
      this.message.sendMessage('/getAllAnnonce', null).subscribe(
        (data)=>{
          if(data){
                this.message.sendMessage('/userAnnonce', null).subscribe(
                  (res1)=>{
                    data.data.forEach(element => {
                      if(element.idAdmin!=0){
                        for(let i of res1.data[0]){
                          if(element.idAdmin==i.idAdmin){
                            element.field = i;
                          }
                        }
                      }
                      else if(element.idUser!=0){
                        for(let i of res1.data[1]){
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