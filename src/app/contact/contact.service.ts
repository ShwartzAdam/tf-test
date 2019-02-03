import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Contact } from './contact'
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getAllContacts(): Observable<Contact[]>{
    return this.http.get<Contact[]>('http://localhost:3000/contacts');
  }
  getContactById(id: string): Observable<Contact>{
    return this.http.get<Contact>(`http://localhost:3000/contacts?id=${id}`);
  }
}
