import { Component, OnInit, Input } from '@angular/core';
import { Contact } from './../contact';
import { StoreService } from 'src/app/store.service';
import { DialogService } from 'primeng/components/common/api';
import { ContactFormComponent } from './../contact-form/contact-form.component';
@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ContactItemComponent implements OnInit {
  @Input() contact: Contact;
  constructor(public dialogService: DialogService,private store: StoreService ) { }

  ngOnInit() {
  }

  editContact(id:string){
        const ref = this.dialogService.open(ContactFormComponent, {
          data: id,
          header: 'Edit a contact',
          width: '70%',
          contentStyle: {"max-height": "350px", "overflow": "auto"}
      });

      ref.onClose.subscribe((contact: Contact) =>{
          console.log(contact);
      });
  }
  deleteContact(id:string){
    this.store.deleteContact(id);
  }

}
