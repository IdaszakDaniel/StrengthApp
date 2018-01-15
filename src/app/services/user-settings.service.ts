import { Injectable } from '@angular/core';

@Injectable()
export class UserSettingsService {

  settings: any;

  constructor() { }

  addSettings(obj){
    this.settings = obj;
  }

  getMaxes(){
    return this.settings;
  }

  getWeaknesses(){
    return this.compareLifts();
  }

  compareLifts(){
    if(this.checkLifts(this.settings.squat, this.settings.bench, 75)) return "bench";
    if(this.checkLifts(this.settings.squat, this.settings.press, 50)) return "press";
    if(this.checkLifts(this.settings.dl, this.settings.squat, 115)) return "squat";
    if(((this.settings.squat/this.settings.dl)*100) > 86) return "dl";
  }

  checkLifts(lift1, lift2, percentage){
    return (((lift2/lift1)*100) < percentage) ? true : false;
  }

}
