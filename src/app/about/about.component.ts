import { Component, OnInit } from '@angular/core';
import { AppInfoService } from '../_services/app-info.service';
import { Config, ConfigService } from '../_services/config.service';
import type { AppInfo } from '../_services/app-info.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  appInfo: AppInfo | undefined;
  config: Config | undefined;

  private appInfoService: AppInfoService;
  private configService: ConfigService;

  constructor(appInfoService: AppInfoService, configService: ConfigService) {
    this.appInfoService = appInfoService;
    this.configService = configService;
  }

  getAppInfo(){
    const observableAppInfo = this.appInfoService.getAppInfo();
    observableAppInfo.subscribe(a => {
      this.appInfo = a;
    })
  }

 getConfig() {
    const observableConfig = this.configService.getConfig();
    observableConfig.subscribe(c => {
      this.config = c;
    })
  }

  ngOnInit() : void {
    this.getAppInfo();
    this.getConfig();
  }
}
