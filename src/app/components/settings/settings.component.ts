import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { UserSettingsService } from '../../services/user-settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SettingsComponent implements OnInit {

  press: number;
  pressReps: number;
  bench: number;
  benchReps: number;
  squat: number;
  squatReps: number;
  dl: number;
  dlReps: number;
  pressMax: number;
  benchMax: number;
  squatMax: number;
  dlMax: number;
  estimates: boolean = false;
  userSettings;

  constructor(userSettingsService: UserSettingsService) {
    this.userSettings = userSettingsService;
  }

  ngOnInit() {
  }

  saveLifts(){
    this.pressMax = this.countOneRepMax(this.pressReps, this.press);
    this.benchMax = this.countOneRepMax(this.benchReps, this.bench);
    this.squatMax = this.countOneRepMax(this.squatReps, this.squat);
    this.dlMax = this.countOneRepMax(this.dlReps, this.dl);
    this.estimates = true;

    let lifts = {"press" : this.pressMax,
      "bench" : this.benchMax,
      "squat" : this.squatMax,
      "dl" : this.dlMax
    }

    this.userSettings.addSettings(lifts);
  }

  countOneRepMax(reps, weight){
    let percentages = [100,95,90,88,86,83,89,78,76,75,72,70,65];
    return Math.floor((weight * 100) / percentages[reps-1]);
  }

}
