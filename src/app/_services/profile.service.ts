import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export type Profile = {
  markdown: string;
};


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  async getProfile() : Promise<Observable<Profile>> {
    const profile: Profile = {
      markdown: 
`
Expert in web technologies, systems programming, real-time event processing and high-performance network computing. 
I have worked in the computing and telecommunications industries for 38 years having assumed roles as VP Product Development, 
Chief Technology Officer, Chief Architect, Strategic Product Planner and Software Designer. 

I am a hands-on researcher and developer who loves to create innovative ways to solve customer problems. 
I enjoy working with other talented people, participating in teams and providing mentorship.

Experienced software developer, architect and researcher. Designed and developed 2 multi-tenant, cloud-hosted SaaS
systems for <a href="https://apxdata.com" target="_blank">https://apxdata.com</a> and <a href="https://fortress.legal" target="_blank">https://fortress.legal</a>.

Looking for opportunities where I can be an individual contributor. I can work remotely or hybrid (in Ottawa). 
My experience as a company founder, executive and manager means I understand the business questions to ask and 
can contribute to both business and technical answers.

In 2002 I co-founded PointShot Wireless a company created to bring mobile hotspots to environments such as passenger trains. 
I served as CTO, VP Product Management and VP Engineering at Pointshot.

In 2000 I was CTO of SpeechFront, a company I co-founded. SpeechFront was focused on building speech-activated applications 
for wireless telecommunications carriers. The applications combined the power of Internet-based instant messaging with the telephone network. 
Six months after its inception, SpeechFront was acquired by Nuance Communications, the world's leading provider of speech recognition technology. 
Over the years I have represented many companies as a public speaker at conferences and trade shows.
`
    }
    return of(profile);
  }
}
