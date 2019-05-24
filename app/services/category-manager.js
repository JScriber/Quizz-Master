import { findAllCategories } from '../db/category-db';

/**
 * Service to manipulate categories.
 */
export class CategoryManager {

  /** Get the unique instance of the category manager. */
  static getInstance() {
    if (!CategoryManager.instance) {
      CategoryManager.instance = new this();
    }

    return CategoryManager.instance;
  }

  /** Get the list of all the categories. */
  getAll() {
    return findAllCategories();
  }
}
