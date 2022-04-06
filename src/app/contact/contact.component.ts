import { Component, OnInit } from '@angular/core';
import { ContactService } from '../_services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: any;

  private contactService: ContactService;
  constructor(contactService: ContactService) {
    this.contactService = contactService;
  }

  async getContact(){
    const observableContact = await this.contactService.getContact();
    observableContact.subscribe(c => {
      this.contact = c;
    })
  }

  async ngOnInit() : Promise<void> {
    await this.getContact();
  }

}
