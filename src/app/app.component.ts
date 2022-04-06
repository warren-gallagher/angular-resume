import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ContactService } from './_services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `Resume`;
  active = 'contact';
  isMenuCollapsed = true;
  contact: any;
  
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
