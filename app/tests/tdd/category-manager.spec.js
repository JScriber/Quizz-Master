import { CategoryManager } from "../../services/category-manager";


describe('category-manager.js', () => {
  test('singleton ', () => {
    expect(CategoryManager.getInstance()).toEqual(CategoryManager.getInstance());
  });
});