import { browser, by, element, Key } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getAddNewWorkoutBtn() {
    return element(by.css('.containerNewWorkout__btn'));
  }

  getAddNewWorkoutInput(){
    return element(by.css('.mat-input-element'));
  }

  getWorkoutAddBtn(){
    return element(by.css('.body__btn > .mat-button-wrapper'));
  }

  getAddBtn(){
    return element(by.css('.head__btn > .mat-button-wrapper'));
  }

  getSelect(){
    return element(by.css('.mat-select'));
  }

  getSelectOption(){
    return element(by.css('[ng-reflect-value="calves"]'));
  }

  getNameInput(){
    return element(by.css('#mat-input-2'));
  }

  getSetsInput(){
    return element(by.css('#mat-input-3'));
  }

  getRepsInput(){
    return element(by.css('[placeholder="reps"]'));
  }

  getCheckBox(){
    return element(by.css('.mat-checkbox-inner-container'));
  }

  getSaveWorkoutButton(){
    return element(by.css('.save-workout'));
  }

  getLastWorkoutTitle(){
    return element.all(by.css('.cards__workout > h3')).last();
  }

  getLastWorkoutTable(number){
    return element.all(by.css('.cards__workout')).last().all(by.css('tr > td')).get(number);
  }

  focus(x){
    browser.executeScript("arguments[0].scrollIntoView();", x.getWebElement());
  }

  esc() {
    browser.actions().sendKeys(Key.ESCAPE).perform();
  }

  pause() {
    return browser.sleep(6000);
  }
}
