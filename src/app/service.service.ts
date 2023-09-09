import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
url = "https://randomuser.me/api/"

getData():Observable<any[]>{
return this.http.get<any[]>(this.url)
}


}
