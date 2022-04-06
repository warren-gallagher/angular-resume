import { Component, OnInit } from '@angular/core';
import { AppInfoService } from '../_services/app-info.service';
import { Config, ConfigService } from '../_services/config.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  appInfo: any;
  config: any;

  private appInfoService: AppInfoService;
  private configService: ConfigService;

  constructor(appInfoService: AppInfoService, configService: ConfigService) {
    this.appInfoService = appInfoService;
    this.configService = configService;
  }

  async getAppInfo(){
    const observableAppInfo = await this.appInfoService.getAppInfo();
    observableAppInfo.subscribe(a => {
      this.appInfo = a;
    })
  }

  async getConfig() {
    const observableConfig = await this.configService.getConfig();
    observableConfig.subscribe(c => {
      this.config = c;
    })
  }

  async ngOnInit() : Promise<void> {
    await this.getAppInfo();
    await this.getConfig();
  }
}
