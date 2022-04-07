import { Component, OnInit } from '@angular/core';
import { ContactService } from '../_services/contact.service';
import { ProfileService } from '../_services/profile.service';
import { ExperienceService } from '../_services/experience.service';
import { TechnologiesService } from '../_services/technologies.service';
import { ConfigService } from '../_services/config.service';
import type { Contact } from '../_services/contact.service';
import type { Profile } from '../_services/profile.service';
import type { Experience } from '../_services/experience.service';
import type { Technology } from '../_services/technologies.service';
import type { Config } from '../_services/config.service';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {

  contact: Contact | undefined;
  profile: Profile | undefined;
  profileLoaded: boolean = false;
  experience: Experience[] | undefined;
  technologies: Technology[] | undefined;
  config: Config | undefined;

  private contactService : ContactService;
  private profileService: ProfileService;
  private experienceService: ExperienceService;
  private technologiesService: TechnologiesService;
  private configService: ConfigService;

  constructor(contactService : ContactService, profileService: ProfileService, experienceService: ExperienceService, technologiesService: TechnologiesService, configService: ConfigService) {
    this.contactService = contactService;
    this.profileService = profileService;
    this.experienceService = experienceService;
    this.technologiesService = technologiesService;
    this.configService = configService;
   }

   getContact(){
    const observableContact = this.contactService.getContact();
    observableContact.subscribe(c => {
      this.contact = c;
    })
  }

  getProfile(){
    const observableProfile = this.profileService.getProfile();
    observableProfile.subscribe(p => {
      this.profile = p;
      this.profileLoaded = true;
    })
  }

  getExperience(){
    const observableExperience = this.experienceService.getProfile();
    observableExperience.subscribe(e => {
      this.experience = e;
    })
  }

  getTechnologies() {
    const observableTechnologies = this.technologiesService.getTechnologies();
    observableTechnologies.subscribe(t => {
      this.technologies = t;
    })
  }

  getConfig() {
    const observableConfig = this.configService.getConfig();
    observableConfig.subscribe(c => {
      this.config = c;
    })
  }

 ngOnInit() : void {
    this.getContact();
    this.getProfile();
    this.getExperience();
    this.getTechnologies();
    this.getConfig();
  }

  ngAfterViewInit() : void {
    window.print();
  }
}
