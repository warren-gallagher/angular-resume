import { Component, OnInit } from '@angular/core';
import { ContactService } from '../_services/contact.service';
import { ExperienceService } from '../_services/experience.service';
import type { Contact } from '../_services/contact.service';
import type { Experience } from '../_services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  contact: Contact | undefined;
  experience: Experience[] | undefined;
  private contactService: ContactService;
  private experienceService: ExperienceService;

  constructor(contactService: ContactService, experienceService: ExperienceService) {
    this.contactService = contactService;
    this.experienceService = experienceService;
  }

  async getContact(){
    const observableContact = await this.contactService.getContact();
    observableContact.subscribe(c => {
      this.contact = c;
    })
  }

  async getExperience(){
    const observableExperience = await this.experienceService.getProfile();
    observableExperience.subscribe(e => {
      this.experience = e;
    })
  }

  async ngOnInit() : Promise<void> {
    await this.getContact();
    await this.getExperience();
  }


}
