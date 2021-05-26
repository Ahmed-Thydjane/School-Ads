import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface PhpData {
  status : string;
  data : any;
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http : HttpClient) { }

  sendMessage(url : string, data : any): Observable<PhpData>  {
    const urlg = environment.urlGenerale + url ;

    return this.http.post<PhpData>(urlg, data, {withCredentials: true});
  }
}
