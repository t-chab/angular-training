import {ExerciseOnePage} from "./app.po";

describe('exercise-one App', () => {
  let page: ExerciseOnePage;

  beforeEach(() => {
    page = new ExerciseOnePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
