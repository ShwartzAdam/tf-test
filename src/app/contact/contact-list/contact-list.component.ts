import { Component, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Observable } from 'rxjs';
import { Contact } from '../contact';
import { StoreService } from '../../store.service';
import { DialogService } from 'primeng/components/common/api';
import { ContactFormComponent } from './../contact-form/contact-form.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[] = [];

  constructor(private store: StoreService,public dialogService: DialogService) { }

  ngOnInit() {
    // init store with contacts
    this.store.init();
    // subscribe to source with subject
    this.store.getContactSource().subscribe(
      (contacts: Contact[])=>{
        this.contacts = contacts;
      }
    )
  }
  
   // edit button clicked event
   addContact(){
     console.log('clicked');
      const ref = this.dialogService.open(ContactFormComponent, {
        data: null,
        header: 'Add a contact',
        width: '70%',
        contentStyle: {"max-height": "350px", "overflow": "auto"}
    });
  
    // callback from dialog service
    ref.onClose.subscribe((contact: Contact) =>{
        console.log(contact);
        // this.store.addContact(contact);
    });
}

}
