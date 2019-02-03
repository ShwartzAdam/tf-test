import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import {DynamicDialogRef,DynamicDialogConfig} from 'primeng/components/common/api';
import { Contact } from '../contact'; 
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  form: FormGroup;
  
  private contactId: string;

  public contact: Contact;
  
  @ViewChild('saveButton') saveButton: ElementRef;

  constructor(private fb: FormBuilder,
              public ref: DynamicDialogRef, 
              public config: DynamicDialogConfig,
              private contactService: ContactService) { 
                
              //   this.form = fb.group({
              //     name: [this.contact.name, Validators.required],
              //     role: [this.contact.role, Validators.required],
              //     address: [this.contact.address, Validators.required],
              //     phone: [this.contact.phone,Validators.required]
              // });
              }

  ngOnInit() {
    if( this.config.data === null ){
      // we want to add a contact

    } else {
      // fetch id to edit contact
      this.contactService.getContactById(this.contactId)
      .subscribe(result => {
        this.contact = result;
      })
    }
   
  }
  
  submitContact(contact:Contact){
    console.log(contact);
    this.ref.close(contact)
  }
}
