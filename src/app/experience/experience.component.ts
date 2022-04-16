import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from '../_services/contact.service';
import { ExperienceService } from '../_services/experience.service';
import type { Contact } from '../_services/contact.service';
import type { Experience } from '../_services/experience.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit, OnDestroy {
  contactSubscription: Subscription | undefined;
  experienceSubscription: Subscription | undefined;
  contact: Contact | undefined;
  experience: Experience[] | undefined;
  private contactService: ContactService;
  private experienceService: ExperienceService;

  constructor(contactService: ContactService, experienceService: ExperienceService) {
    this.contactService = contactService;
    this.experienceService = experienceService;
  }

  getContact(){
    const observableContact = this.contactService.getContact();
    this.contactSubscription = observableContact.subscribe(c => {
      this.contact = c;
    })
  }

  getExperience(){
    const observableExperience = this.experienceService.getProfile();
    this.experienceSubscription = observableExperience.subscribe(e => {
      this.experience = e;
    })
  }

  ngOnInit() : void {
    this.getContact();
    this.getExperience();
  }

  ngOnDestroy(): void {
    this.contactSubscription?.unsubscribe();
    this.experienceSubscription?.unsubscribe();
  }
}
