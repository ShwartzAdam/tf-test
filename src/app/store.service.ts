import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import { Contact } from "./contact/contact";
import { ContactService } from "./contact/contact.service";


@Injectable({
  providedIn: "root"
})
export class StoreService {

  private subject = new BehaviorSubject<Contact[]>([]);

  private contacts: Contact[] = [];

  constructor(private contactService: ContactService){}

  init() {
    this.contactService.getAllContacts()
      .pipe(
        tap(() => console.log('Store service has fetch all contacts')),
      )
      .subscribe(
        contacts => {
          this.subject.next(contacts)
          this.contacts = contacts;

        }
      );
  }
  
  getContactSource(): Observable<Contact[]>{
    // return source 
    return this.subject.asObservable();
  }
  notifyContacts(contacts: Contact[]){
    this.subject.next(contacts);
  }

  deleteContact(id:string){
    this.contacts = this.contacts.filter( c => c.id !== id);
    this.notifyContacts(this.contacts);
  }
  
  editContact(id:string, contact:Contact){
    
  }
  addContact(contact: Contact){
    this.contacts.push(contact);
    this.notifyContacts(this.contacts);
  }
  
}
