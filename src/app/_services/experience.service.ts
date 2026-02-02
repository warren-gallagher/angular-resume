import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export type Experience = {
  companyName: string,
  workTitle: string,
  workDuration: string,
  markdown: string
};

const experience : Experience[] = [
  {
      companyName: "Startup",
      workTitle: "Advisor",
      workDuration: "ongoing",
      markdown: 
`
IMRSV Data Labs (imrsv.ai) - I provide business and technology advisory services for this Ottawa-based startup.

openera.com - I provided business and technology advisory services prior to its acquisition by LiveQOS.com in October of 2013.

RedSkyMobile.com - I provided business and technology advisory services prior to its acquisition by Research In Motion (now Blackberry)in 2005.
`
  },
  {
      companyName: "AffinitiQuest.io",
      workTitle: "Sr. Software Developer",
      workDuration: "Apr 2022-Current",
      markdown:
`
At AffinitiQuest.io, I am responsible for researching, designing implementing and supporting a SaaS product that
gives companies the ability to issue and prove validity of Verifiable Credentials.

The user interfaces are implemented using Angular and Bootstrap.

The application servers are written in C#, Typescript, and javascript.

Deployment is to Microsoft Azure.
`
  },
  {
    companyName: "Fortress.Legal",
    workTitle: "Chief Technology Officer",
    workDuration: "Nov 2020-Mar 2022",
    markdown:
`
At Fortress.Legal, I was responsible for hiring engineering and operations people and building the company's technology platform.

I was actively involved in business strategy and fundraising.

The was interfaces are implemented using Svelte and MaterialUI.

The application servers are written in Typescript, utilizing NodeJS, Express, FoalTS, TypeORM, OpenAPI and Postgresql.

Deployment was to Amazon Web Services utilizing Elastic Load Balancer, Database as a Service and Virtual Servers.
`
},
{
      companyName: "APXdata.com",
      workTitle: "Chief Technology Officer",
      workDuration: "2014-2020",
      markdown:
`
At APX, I was responsible for hiring engineering and operations people and building the company's technology platform.

I was actively involved in business strategy and fundraising.

The web interfaces are implemented using AngularJS, VueJS and jQuery. The application servers are written in Javascript, 
utilizing NodeJS, Express and CouchDB. The mobile application on iOS, was written in Swift.
`
  },
  {
      companyName: "Therapeutic Monitoring Systems",
      workTitle: "VP Product Development",
      workDuration: "2011-2014",
      markdown:
`
At Therapeutic Monitoring Systems, I was responsible for hiring a development and verification team and building the 
companies first FDA cleared software platform, CIMVA Universal.

I was actively involved in the technology choices, architecture, design and implementation of this web-based application.

The UI was targeted at the iPad and desktop browsers utilizing jQueryMobile.

The backend was implemented in C# using Microsoft Charts, MVC3 and ASP.NET and SQL Server.
`
  },
  {
      companyName: "Ciena",
      workTitle: "Software Platform Consultant",
      workDuration: "2011",
      markdown:
`
At Ciena I created a new web-based network management platform for their optical CN2000 product.

The UI utilized Google's Web Toolkit (GWT). The backend was implemented utilizing the Play! MVC Framework.

The network elements were managed via the Simple Network Management Protocol (SNMP).
`
  },
  {
      companyName: "GridIron Software",
      workTitle: "Chief Technology Officer",
      workDuration: "2004-2010",
      markdown:
`
At GridIron Software I was CTO and chief architect for the award winning Flow, Nucleo and Nucleo Pro products. 
I provided the technical leadership at GridIron and did principal research enabling the creation of GridIron Flow. 
Under my leadership, GridIron filed many patent applications. For significant portions of the Flow development cycle, 
I ran all of Engineering and QA while still contributing code. The core technology in Flow is now incorporated into 
Interset's core product offerings.

Most of GridIron's software was implemented in C++ and Objective-C. It included development of device drivers, system 
services and daemons as well as user agent and user interface.
`
  },
  {
      companyName: "Pointshot Wireless",
      workTitle: "Founder/Chief Technology Officer/VP Product",
      workDuration: "2002-2004",
      markdown: 
`
PointShot Wireless created Internet access equipment for use on passenger trains. The RailPoint product provided WAN 
access via satellite and cellular data radios. LAN access was WiFi. As CTO, I defined the technology vision for Pointshot. 
As VP Product Management I defined PointShot's product requirements. 
As VP Engineering I led the development and delivery of PointShot's products.

One of the breakthroughs at PointShot was a learning management system. This was necessary as our WiFi hotspots were on the 
move and subject to various circumstances that would have to be treated as failures in a fixed network.
`
  },
  {
      companyName: "GridIron Software",
      workTitle: "Senior Software Architect",
      workDuration: "2002",
      markdown:
`I had invested in GridIron, was an advisor to the company and was interested in the problem space. I joined the team to 
develop the first proof-of-concept technology. Prior to departing to start PointShot wireless, I sourced the engineering 
team to turn the proof-of-concept technology into product.
`
  },
  {
      companyName: "Nuance Communications",
      workTitle: "Senior Architect, Personal Communications",
      workDuration: "2001",
      markdown:
`
I continued the architecture work started at SpeechFront (see below). I defined a W3C standards strategy (VoiceXML) for Nuance and 
represented the companies interests by speaking at technical and trade conferences.
`
  },
  {
      companyName: "Speechfront",
      workTitle: "Founder/Chief Technology Officer",
      workDuration: "2000",
      markdown:
`
Speechfront combined the power of Instant Messaging and Presence with speech-activated services in a cellular voice network. 
I developed technical vision for SpeechFront's software products and high-level systems architecture, communicating the vision 
to investors, partners and customers. I participated in negotiating the sale of SpeechFront to Nuance Communications helping to 
ensure a win for our investors, employees and Nuance.
`
  },
  {
      companyName: "Mitel Corporation",
      workTitle: "Product Strategist - IP Applications",
      workDuration: "1999",
      markdown:
`
I developed product strategies for Mitel's IP Applications around core technologies of Speech Recognition and HDML/WML. 
I also developed a business unit strategy around embracing user's of wireless voice/data services in the enterprise.
`
  },
  {
      companyName: "Nortel Networks",
      workTitle: "Systems Architect - OpenSpeech Business Unit",
      workDuration: "1998",
      markdown: 
`
I was responsible for technology planning for central office, wireless carrier and enterprise based speech recognition 
applications. I formulated strategies for achieving multi-platform portability for Nortel Networks' OpenSpeech Media Framework. 
I further participated in strategic corporate alliance negotiations on behalf of Nortel Networks.
`
  },
  {
      companyName: "Objective Design Inc.",
      workTitle: "President and chief consultant",
      workDuration: "1990-1997",
      markdown:
`
I ran my own telecom software architecture, consulting and contract development firm. I designed and implemented speech-activated 
call processing applications for deployment in central office environments. I also provided design-consulting services for select 
telecom clients of ObjecTime Ltd.
`
  },
  {
      companyName: "Gandalf Systems Inc.",
      workTitle: "Senior software designer",
      workDuration: "1988-1989",
      markdown:
`
I designed and implemented features for Gandalf's Starmaster network switch. I also designed a user interface description language 
and run-time system for Gandalf's Taxi dispatching product.
`
  },
  {
      companyName: "Northern Telecom Ltd.",
      workTitle: "Test Engineer",
      workDuration: "1983-1988",
      markdown:
`
I developed and implemented manufacturing testing processes for circuit board and sub-systems of the DMS-100 digital circuit switch. 
I also participated in cost also participated in cost reduction activities for mature products.
`
  }
];

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() { }

  getProfile() :Observable<Experience[]> {
    return of(experience);
  }
}
