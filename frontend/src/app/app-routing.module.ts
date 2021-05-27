import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddadminComponent } from './addadmin/addadmin.component';
import { AddannoncesComponent } from './addannonces/addannonces.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { MesannoncesComponent } from './mesannonces/mesannonces.component';
import { SigninComponent } from './signin/signin.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';

const routes: Routes = [
        { path: '', pathMatch: 'full', redirectTo : '/login' },
        { path: 'login', component: LoginComponent },
        { path: 'signin', component: SigninComponent },
        { path: '', canActivateChild: [AuthGuard],
              children: [
                { path: 'annonces', component: AnnoncesComponent },
                { path: 'updateuser', component: UpdateuserComponent },
                { path: 'mesannonces', component: MesannoncesComponent },
                { path: 'addannonces', component: AddannoncesComponent },
                { path: 'addadmin', component: AddadminComponent }
              ]
        },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
