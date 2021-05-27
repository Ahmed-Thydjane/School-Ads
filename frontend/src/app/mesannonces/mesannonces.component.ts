import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message/message.service';

@Component({
  selector: 'app-mesannonces',
  templateUrl: './mesannonces.component.html',
  styleUrls: ['./mesannonces.component.scss']
})
export class MesannoncesComponent implements OnInit {

  constructor(private message : MessageService) { }

  ngOnInit(): void {
    if(localStorage.getItem('idAdmin')!=null){
      this.message.sendMessage('/getAnnonceAdmin',localStorage.getItem('idAdmin')).subscribe(
        (data)=>{
          if(data){
            console.log(data.data);
          }
        }
      );
    }
    if(localStorage.getItem('idUser')!=null){
      this.message.sendMessage('/getAnnonceUser',localStorage.getItem('idUser')).subscribe(
        (data)=>{
          if(data){
            console.log(data.data);
          }
        }
      );
    }
    
  }


}
