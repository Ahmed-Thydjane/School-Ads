import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {NodeData} from "./NodeData";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:HttpClient) { }

  sendMessage(url:string, data:any):Observable<NodeData>{
    const url_entier = environment.prefix + url ;
    return  this.http.post<NodeData>(url_entier,data,{withCredentials: true});
  }
}
