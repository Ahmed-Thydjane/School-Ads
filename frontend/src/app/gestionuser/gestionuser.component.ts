import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MessageService } from '../message/message.service';

export interface Utilisateur{
  idUser: number;
  nom : string;
  prenom : string;
  email : string;
  nbAnnonce : number;
}

@Component({
  selector: 'app-gestionuser',
  templateUrl: './gestionuser.component.html',
  styleUrls: ['./gestionuser.component.scss']
})
export class GestionuserComponent implements OnInit {

  id : number;
  nbAnnonce : number;

  tab : Utilisateur[];
  
  @ViewChild('dialog1') Dialog1 : TemplateRef<any>;

  displayedColumns : string[] =  ['nom', 'profil', 'email', 'nbAnnonces', 'action'];
  dataSource = new MatTableDataSource<Utilisateur>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private message : MessageService, private dialog : MatDialog) { }

  ngOnInit(): void {
    this.tab = [];
    this.message.sendMessage('/allUsers',null).subscribe(
      (result)=>{
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        result.data.forEach(i => {
          this.message.sendMessage('/nbAnnonce', {idUser : i.idUser}).subscribe(
            (data)=>{
              if(data){
                i.nbAnnonce = data.data[0]['COUNT(*)'];
              }
            }
          )
          this.tab.push(i);
        }
        )
        this.dataSource.data = this.tab;
      }
    )
    this.nombreAnnonce();
  }

  supprimer(){
    this.message.sendMessage('/getDeleteUser', {idUser : this.id}).subscribe(
      (data)=>
      {
        if(data){
          this.refresh();
          console.log('good');
        }
      }
    )
  }

  refresh(){
    this.message.sendMessage('/allUsers',null).subscribe(
      (result)=>{
        this.dataSource.data = result.data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
  }

  openDialog1(id){
    this.id = id;
    this.dialog.open(this.Dialog1);
  }

  nombreAnnonce(){
    

    
  }
}
