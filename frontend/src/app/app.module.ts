import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AnnoncesComponent } from './annonces/annonces.component';
import { SigninComponent } from './signin/signin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AddannoncesComponent } from './addannonces/addannonces.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { MesannoncesComponent } from './mesannonces/mesannonces.component';
import { AddadminComponent } from './addadmin/addadmin.component';
import { AdministrationComponent } from './administration/administration.component';
import { GestionuserComponent } from './gestionuser/gestionuser.component';
import { GestionannoncesComponent } from './gestionannonces/gestionannonces.component';
import { GestiontoutesannoncesComponent } from './gestiontoutesannonces/gestiontoutesannonces.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ParticlesModule } from 'angular-particle';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AnnoncesComponent,
    SigninComponent,
    AddannoncesComponent,
    UpdateuserComponent,
    MesannoncesComponent,
    AddadminComponent,
    AdministrationComponent,
    GestionuserComponent,
    GestionannoncesComponent,
    GestiontoutesannoncesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
