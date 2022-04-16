import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Contact, ContactService } from './_services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = `Resume`;
  active = 'contact';
  isMenuCollapsed = true;
  contact: Contact | undefined;
  
  private contactService: ContactService;
  private titleService: Title;
  public constructor(contactService: ContactService, titleService: Title) {
    this.contactService = contactService;
    this.titleService = titleService;
    this.setTitle();
   }

   public async setTitle() {
    const observableContact = await this.contactService.getContact();
    observableContact.subscribe(c => {
      this.title = `Resume - ${c.name}`
      this.titleService.setTitle(this.title);
    })
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
