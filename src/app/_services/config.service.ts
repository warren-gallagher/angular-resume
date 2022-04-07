import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export type Config = {
  copyright: string;
  deploymentURL: string;
  repositoryURL: string;
};

const config : Config = {
  copyright: "Copyright © Warren Gallagher 2022, all rights reserved.",
  deploymentURL: "https://resume.gallaghers.ca",
  repositoryURL: "https://github.com/warren-gallagher/angular-resume/"
};


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  getConfig() : Observable<Config> {
    return of(config);
  }
}
