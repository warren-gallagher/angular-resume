import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export type Technology = {
  category: string;
  markdown: string;
};

const technologies : Technology[] = [
  {
    category: "Verifiable Credentials",
    markdown:
`
HyperLedger Indy with AnonCreds.

Hyperledger Aries utilizing HyperLedger Indy with Anoncreds and W3C Verifiable Credentials.

* Aries Cloud Agent - Python (ACA-PY)
* Aries Bifold

Microsoft Entra Verified ID.
`
  },
  {
      category: "Programming Languages",
      markdown:
`
TypeScript, Javascript, C#, Swift, Objective-C, C++, C, Java, Pascal, PL/M.

HTML, CSS, TCL, Bash, Ruby

68000, 8085, 68HC11, 6502, 8259 Assemblers
`
  },
  {
      category: "Web Frameworks",
      markdown:
`
Angular.io - a frontend toolchain and framework for creating html/css/typesript web apps.

Svelte - a frontend toolchain for creating blazing fast component based user interfaces.

SvelteKit - a full stack toolchain and framework for creating Static, Server Side Rendered and Client Side Rendered applications.

FoalTS - a TypeScript framework built on top of NodeJS that utilizes TypeORM, OpenAPI and S3

NodeJS/Express - a basic web application server utilizing Javascript

Spring MVC - an MVC framework for Java

Play! - an MVC framework for Java and Scala

MVC3 - an ASP.NET MVC framework for C#

Sinatra - a micro web framework for Ruby
`
  },
  {
      category: "Mapping",
      markdown:
`
Google Maps

Apple Maps

Mapbox - Extensive use.
`
  },
  {
      category: "Databases",
      markdown:
`
PostgreSQL, SQLite, SQL Server, MySQL, MariaDB

CouchDB, MongoDB, Riak
`
  },
  {
      category: "Cloud Services",
      markdown:
`
Vercel, Supabase, Stripe, Microsoft Azure, Amazon Web Services
`
  },
  {
      category: "Operating Systems",
      markdown:
`
MacOS - Tiger through Monterey

Microsoft Windows - Windows NT through Windows 10

Linux, AIX, System V R4, Solaris

Embedded - iRMX, PSOS, VxWorks

Mobile - Apple iOS, Google Android
`
  },
  {
      category: "Tools",
      markdown:
`
VS Code, Microsoft Visual Studio, Eclipse, Xcode

Jira, Trac, Subversion, Git
`
  },
  {
      category: "Protocols",
      markdown:
`
TCP, UDP, HTTP, LDAP, SS7, ISDN, SNMP

Numerous proprietary protocols
`
  }
];

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {

  constructor() { }

  getTechnologies() : Observable<Technology[]> {
    return of(technologies);
  }
}
