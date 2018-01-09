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

}
