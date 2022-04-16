import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from '../_services/contact.service';
import type { Contact } from '../_services/contact.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {
  contactSubscription: Subscription | undefined;
  contact: Contact | undefined;

  private contactService: ContactService;
  constructor(contactService: ContactService) {
    this.contactService = contactService;
  }

 getContact(){
    const observableContact = this.contactService.getContact();
    this.contactSubscription = observableContact.subscribe(c => {
      this.contact = c;
    })
  }

  ngOnInit() : void {
    this.getContact();
  }

  ngOnDestroy(): void {
    this.contactSubscription?.unsubscribe();
  }

}
