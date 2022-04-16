import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
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
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit, OnDestroy, AfterViewInit {
  contactSubscription: Subscription | undefined;
  profileSubscription: Subscription | undefined;
  experienceSubscription: Subscription | undefined;
  technologiesSubscription: Subscription | undefined;
  configSubscription: Subscription | undefined;
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
    this.contactSubscription = observableContact.subscribe(c => {
      this.contact = c;
    })
  }

  getProfile(){
    const observableProfile = this.profileService.getProfile();
    this.profileSubscription = observableProfile.subscribe(p => {
      this.profile = p;
      this.profileLoaded = true;
    })
  }

  getExperience(){
    const observableExperience = this.experienceService.getProfile();
    this.experienceSubscription = observableExperience.subscribe(e => {
      this.experience = e;
    })
  }

  getTechnologies() {
    const observableTechnologies = this.technologiesService.getTechnologies();
    this.technologiesSubscription = observableTechnologies.subscribe(t => {
      this.technologies = t;
    })
  }

  getConfig() {
    const observableConfig = this.configService.getConfig();
    this.configSubscription = observableConfig.subscribe(c => {
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

  ngOnDestroy(): void {
    this.configSubscription?.unsubscribe();
    this.contactSubscription?.unsubscribe();
    this.experienceSubscription?.unsubscribe();
    this.technologiesSubscription?.unsubscribe();
    this.profileSubscription?.unsubscribe();
  }

  ngAfterViewInit() : void {
    window.print();
  }
}
