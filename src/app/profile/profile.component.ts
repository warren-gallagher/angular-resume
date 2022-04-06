import { Component, OnInit } from '@angular/core';
import { ContactService } from '../_services/contact.service';
import { ProfileService } from '../_services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  contact: any;
  profile: any;

  private contactService: ContactService;
  private profileService: ProfileService;

  constructor(contactService: ContactService, profileService: ProfileService) {
    this.contactService = contactService;
    this.profileService = profileService;
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

  async ngOnInit() : Promise<void> {
    await this.getContact();
    await this.getProfile();
  }


}