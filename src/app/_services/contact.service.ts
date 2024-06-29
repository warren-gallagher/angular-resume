import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export type Contact = {
  name: string;
  pictureURL: string;
  linkedInURL: string;
  githubURL: string;
  emailURL: string;
  mastodonURL: string;
  emailAddr: string;
  mobilePhone: string;
  mobilePhoneURL: string;
};

const contact: Contact = {
  name: "Warren Gallagher",
  pictureURL: "img/Warren_Gallagher_Sunglasses64x64.jpg",
  linkedInURL: "https://ca.linkedin.com/pub/warren-gallagher/0/3b/18a",
  githubURL: "https://github.com/warren-gallagher?tab=repositories/",
  emailURL: "mailto:warren@gallaghers.ca?subject=Resume Inquiry",
  mastodonURL: "https://twit.social/@WarrenGallagher",
  emailAddr: "warren@gallaghers.ca",
  mobilePhone: "613.791.4987",
  mobilePhoneURL: "tel:613.791.4987"
}

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  constructor() { }
  
  getContact() : Observable<Contact> {
    return of(contact);
  }
}
