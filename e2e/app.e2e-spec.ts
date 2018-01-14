import { AppPage } from './app.po';

describe('strength-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should create new workout', () => {
    page.navigateTo();
    let title = "ProtractorTest1";
    let sets = "5";
    let reps = "3";
    let arr = "3,3,3,3,3";
    page.testForm(title, sets, reps);
    expect(page.getLastWorkoutTitle().getText()).toBe(title);
    expect(page.getLastWorkoutTable(2).getText()).toBe(sets);
    expect(page.getLastWorkoutTable(3).getText()).toBe(arr);
  });
});
