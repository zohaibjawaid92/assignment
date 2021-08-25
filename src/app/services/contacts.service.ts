import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  baseUrl = 'https://dummyapi.io/data/v1/user';
  constructor(private http: HttpClient) { }

  getContacts(){
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'app-id' : '612655b9278a046f3930518c'
    });
    return this.http.get(this.baseUrl,{headers:headers});
  }

  getContactById(id : any){
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'app-id' : '612655b9278a046f3930518c'
    });
    return this.http.get(`https://dummyapi.io/data/v1/user/${id}`,{headers:headers});
  }
}


