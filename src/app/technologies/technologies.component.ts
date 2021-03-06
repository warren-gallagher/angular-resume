import { Component, OnInit } from '@angular/core';
import { ContactService } from '../_services/contact.service';
import { TechnologiesService } from '../_services/technologies.service';
import type { Contact } from '../_services/contact.service';
import type { Technology } from '../_services/technologies.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  contact: Contact | undefined;
  technologies: Technology[] | undefined;
  private contactService: ContactService;
  private technologiesService: TechnologiesService;

  constructor(contactService: ContactService, technologiesService: TechnologiesService) {
    this.contactService = contactService;
    this.technologiesService = technologiesService;
  }

  getContact(){
    const observableContact =this.contactService.getContact();
    observableContact.subscribe(c => {
      this.contact = c;
    })
  }

  getTechnologies() {
    const observableTechnologies = this.technologiesService.getTechnologies();
    observableTechnologies.subscribe(t => {
      this.technologies = t;
    })
  }

  ngOnInit() : void {
    this.getContact();
    this.getTechnologies();
  }

}
