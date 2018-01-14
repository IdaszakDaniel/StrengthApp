import { browser, by, element, Key } from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get('/');
  }

  getInitWorkoutBtn() { return element(by.css('.containerNewWorkout__btn')); }
  getInitWorkoutInput(){ return element(by.css('.mat-input-element')); }
  getInitAddBtn(){ return element(by.css('.head__btn > .mat-button-wrapper')); }
  getNameInput(){ return element(by.css('#mat-input-2')) }
  getSetsInput(){ return element(by.css('#mat-input-3')); }
  getRepsInput(){ return element(by.css('[placeholder="reps"]')); }
  getCheckBox(){ return element(by.css('.mat-checkbox-inner-container')); }
  getWorkoutAddBtn(){ return element(by.css('.body__btn > .mat-button-wrapper')); }
  getSaveWorkoutButton(){ return element(by.css('.save-workout')); }
  getLastWorkoutTitle(){ return element.all(by.css('.cards__workout > h3')).last(); }
  getLastWorkoutTable(number){ return element.all(by.css('.cards__workout')).last()
                                      .all(by.css('tr > td')).get(number); }

  testForm(title, sets, reps){
    this.getInitWorkoutBtn().click();
    this.getInitWorkoutInput().sendKeys(title);
    this.getInitAddBtn().click();
    this.getNameInput().sendKeys(title);
    this.getSetsInput().sendKeys(sets);
    this.getCheckBox().click();
    this.getRepsInput().sendKeys(reps);
    this.getWorkoutAddBtn().click();
    this.focus(this.getSaveWorkoutButton());
    this.getSaveWorkoutButton().click();
    this.focus(this.getLastWorkoutTitle());
  }

  pause() {
    return browser.sleep(6000);
  }

  focus(el){
    browser.executeScript("arguments[0].scrollIntoView();", el.getWebElement());
  }
}
