import { Component, OnInit } from '@angular/core';
import { ContactService } from '../_services/contact.service';
import { ProfileService } from '../_services/profile.service';
import { ExperienceService } from '../_services/experience.service';
import { TechnologiesService } from '../_services/technologies.service';
import { ConfigService } from '../_services/config.service';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {

  contact: any;
  profile: any;
  experience: any;
  technologies: any;
  config: any;

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

   async getContact(){
    const observableContact = await this.contactService.getContact();
    observableContact.subscribe(c => {
      this.contact = c;
    })
  }

  async getProfile(){
    const observableProfile = await this.profileService.getProfile();
    observableProfile.subscribe(p => {
      this.profile = p;
    })
  }

  async getExperience(){
    const observableExperience = await this.experienceService.getProfile();
    observableExperience.subscribe(e => {
      this.experience = e;
    })
  }

  async getTechnologies() {
    const observableTechnologies = await this.technologiesService.getTechnologies();
    observableTechnologies.subscribe(t => {
      this.technologies = t;
    })
  }

  async getConfig() {
    const observableConfig = await this.configService.getConfig();
    observableConfig.subscribe(c => {
      this.config = c;
    })
  }

  async ngOnInit() : Promise<void> {
    await this.getContact();
    await this.getProfile();
    await this.getExperience();
    await this.getTechnologies();
    await this.getConfig();
  }

  ngAfterViewInit() : void {
    window.print();
  }
}
