import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export type AppInfo = {
  appName: string,
  appVersion: string
};

const unknown: AppInfo = {
  appName: 'unknown',
  appVersion: 'unknown'
};

@Injectable({
  providedIn: 'root'
})

export class AppInfoService {

  constructor() { }

  async getAppInfo() : Promise<Observable<AppInfo>> {
    const response = await fetch('assets/app-info.json');
    if( response.ok ) {
      const appInfo = await response.json();
      return of(appInfo);
    }
    return of(unknown);
  }
}
