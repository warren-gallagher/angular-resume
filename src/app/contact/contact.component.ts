import { Component, OnInit } from '@angular/core';
import { ContactService } from '../_services/contact.service';
import type { Contact } from '../_services/contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: Contact | undefined;

  private contactService: ContactService;
  constructor(contactService: ContactService) {
    this.contactService = contactService;
  }

 getContact(){
    const observableContact = this.contactService.getContact();
    observableContact.subscribe(c => {
      this.contact = c;
    })
  }

  ngOnInit() : void {
   this.getContact();
  }

}
