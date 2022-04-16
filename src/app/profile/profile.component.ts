import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from '../_services/contact.service';
import { ProfileService } from '../_services/profile.service';
import type { Contact } from '../_services/contact.service';
import type { Profile } from '../_services/profile.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  contactSubscription: Subscription | undefined;
  profileSubscription: Subscription | undefined;
  contact: Contact | undefined;
  profile: Profile | undefined;
  contactLoaded: boolean = false;
  profileLoaded: boolean = false;

  private contactService: ContactService;
  private profileService: ProfileService;

  constructor(contactService: ContactService, profileService: ProfileService) {
    this.contactService = contactService;
    this.profileService = profileService;
  }

  getContact(){
    const observableContact = this.contactService.getContact();
    this.contactSubscription = observableContact.subscribe(c => {
      this.contact = c;
      this.contactLoaded = true;
    })
  }

 getProfile(){
    const observableProfile = this.profileService.getProfile();
    this.profileSubscription = observableProfile.subscribe(p => {
      this.profile = p;
      this.profileLoaded = true;
    })
  }

  ngOnInit() : void {
    this.getContact();
    this.getProfile();
  }

  ngOnDestroy(): void {
    this.contactSubscription?.unsubscribe();
    this.profileSubscription?.unsubscribe();
  }

}
