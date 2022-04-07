import { Injectable } from '@angular/core';
import { Observable, of, pipe, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

  private httpClient : HttpClient;
  constructor(httpClient : HttpClient) {
    this.httpClient = httpClient;
  }

  getAppInfo() : Observable<AppInfo> {
    return this.httpClient.get<AppInfo>('assets/app-info.json')
      .pipe(
        catchError(function(err) {
          console.log('error caught in service')
          console.error(`AppInfoService.getAppInfo() ERROR : ${JSON.stringify(err,null,2)}`);

          //Handle the error here

          return of(unknown);    //Rethrow it back to component
        })
      );
  }
}
