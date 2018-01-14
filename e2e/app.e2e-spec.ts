import { AppPage } from './app.po';

describe('strength-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    page.getAddNewWorkoutBtn().click();
    page.getAddNewWorkoutInput().sendKeys("ProtractorTest1");
    page.getAddBtn().click();
    page.getNameInput().sendKeys("ProtractorTest1");
    page.getSetsInput().sendKeys("5");
    page.getCheckBox().click();
    page.getRepsInput().sendKeys("3");
    page.getWorkoutAddBtn().click();
    page.focus(page.getSaveWorkoutButton());
    page.getSaveWorkoutButton().click();
    page.focus(page.getLastWorkoutTitle());
    expect(page.getLastWorkoutTitle().getText()).toBe("ProtractorTest1");
    expect(page.getLastWorkoutTable(2).getText()).toBe("5");
    expect(page.getLastWorkoutTable(3).getText()).toBe("3,3,3,3,3");
  });
});
