import { Component, OnInit } from '@angular/core';

import { UserSettingsService } from '../../services/user-settings.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  weaknesses: string;
  m0: any = {"visibility" : "hidden"};
  m1: any = {"visibility" : "hidden"};
  m2: any = {"visibility" : "hidden"};
  m3: any = {"visibility" : "hidden"};
  m4: any = {"visibility" : "hidden"};
  m5: any = {"visibility" : "hidden"};
  m6: any = {"visibility" : "hidden"};
  m7: any = {"visibility" : "hidden"};
  m8: any = {"visibility" : "hidden"};
  m9: any = {"visibility" : "hidden"};
  m10: any = {"visibility" : "hidden"};
  m11: any = {"visibility" : "hidden"};
  m12: any = {"visibility" : "hidden"};
  userSettings;

  constructor(userSettingsService: UserSettingsService) {
    this.userSettings = userSettingsService;
  }

  ngOnInit() {
    this.weaknesses = this.userSettings.getWeaknesses();
    this.m0 = {"visibility" : "hidden"};
    this.m1 = {"visibility" : "hidden"};
    this.m2 = {"visibility" : "hidden"};
    this.m3 = {"visibility" : "hidden"};
    this.m4 = {"visibility" : "hidden"};
    this.m5 = {"visibility" : "hidden"};
    this.m6 = {"visibility" : "hidden"};
    this.m7 = {"visibility" : "hidden"};
    this.m8 = {"visibility" : "hidden"};
    this.m9 = {"visibility" : "hidden"};
    this.m10 = {"visibility" : "hidden"};
    this.m11 = {"visibility" : "hidden"};
    this.m12 = {"visibility" : "hidden"};

    if(this.weaknesses == "bench"){
      this.m0 = {"visibility" : "visible"};
      this.m10 = {"visibility" : "visible"};
      this.m11 = {"visibility" : "visible"};
    }
    if(this.weaknesses == "squat"){
      this.m5 = {"visibility" : "visible"};
      this.m3 = {"visibility" : "visible"};
      this.m2 = {"visibility" : "visible"};
      this.m1 = {"visibility" : "visible"};
    }
    if(this.weaknesses == "press"){
      this.m12 = {"visibility" : "visible"};
      this.m11 = {"visibility" : "visible"};
      this.m8 = {"visibility" : "visible"};
    }
    if(this.weaknesses == "dl"){
      this.m3 = {"visibility" : "visible"};
      this.m4 = {"visibility" : "visible"};
      this.m5 = {"visibility" : "visible"};
      this.m6 = {"visibility" : "visible"};
      this.m7 = {"visibility" : "visible"};
      this.m9 = {"visibility" : "visible"};
    }
  }

}
