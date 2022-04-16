import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppInfoService } from '../_services/app-info.service';
import { Config, ConfigService } from '../_services/config.service';
import type { AppInfo } from '../_services/app-info.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

  appInfoSubscription: Subscription | undefined;
  configSubscription: Subscription | undefined;
  appInfo: AppInfo | undefined;
  config: Config | undefined;

  initialValues = {fullname: 'Warren Gallagher'};

  constructor(private appInfoService: AppInfoService, private configService: ConfigService) {
  }

  getAppInfo(){
    const observableAppInfo = this.appInfoService.getAppInfo();
    this.appInfoSubscription = observableAppInfo.subscribe(a => {
      this.appInfo = a;
    })
  }

 getConfig() {
    const observableConfig = this.configService.getConfig();
    this.configSubscription = observableConfig.subscribe(c => {
      this.config = c;
    });
  }

  ngOnInit() : void {
    this.getAppInfo();
    this.getConfig();
  }

  ngOnDestroy(): void {
    this.appInfoSubscription?.unsubscribe();
    this.configSubscription?.unsubscribe();
  }

  finalValues(appInfo: AppInfo) {
    console.log( `finalValues - ${JSON.stringify(appInfo)}`)
  }
}
